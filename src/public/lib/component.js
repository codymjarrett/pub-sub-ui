import Store from '../js/store/store.js';

// base class for all other components to extend from
export default class Component {
    constructor(props = {}) {
        this.render = this.render || function () { };

        if (props.store instanceof Store) {
            // whenever the state changes, the components render function will trigger 
            props.store.events.subscribe('stateChange', () => this.render());
        }

        if (props['element']) {
            this.element = props.element;
        }
    }
}