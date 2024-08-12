export default {
    //The context, is the instance of the Store class and the payload is the actual data change, passed in by the dispatch method in the Store class.
    addItem(context, payload) {
        context.commit('addItem', payload);
    },
    clearItem(context, payload) {
        context.commit('clearItem', payload);
    }
};