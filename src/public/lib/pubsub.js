
class PubSub {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        this.events.get(event).push(callback);
    }

    publish(event, data) {
        if (!this.events.has(event)) {
            return [];
        }

        return this.events.get(event).map(callback => callback(data));
    }
}

export default PubSub;