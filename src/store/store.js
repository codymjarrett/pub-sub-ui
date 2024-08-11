import PubSub from "../lib/pubsub.js";

class Store {
    constructor(params) {
        this.state = {};
        this.actions = {};
        this.mutations = {};
        this.events = new PubSub();

        if(params['actions']){
            this.actions = params['actions'];
        }

        if(params['mutations']){
            this.mutations = params['mutations'];
        }
        this.state = new Proxy(params.state || {}, {
            set: function(state, value, key) {
                state[key] = value;
                console.log(`stateChange: ${key}: ${value}`);
                this.events.publish('stateChange', this.state);
                return true;
            }
        })
    }
    dispatch(actionName, payload){
        // should i use const self  = this; here?
        if(typeof this.actions[actionName] !== 'function'){
            console.error(`Action ${actionName} doesn't exist`);
            return false;
        }
        console.groupCollapsed(`ACTION: ${actionName}`);
        this.actions[actionName](this, payload);
        console.groupEnd();
        return true;

    }
    commit(mutationName, payload){
        if(typeof this.mutations[mutationName] !== 'function'){
            console.error(`Mutation ${mutationName} doesn't exist`);
            return false;
        }
        const newState = this.mutations[mutationName](this.state, payload);

        this.state = Object.assign(this.state, newState);
        return true

    }
}

export default Store;