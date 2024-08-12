import Component from '../lib/component.js';
import store from '../js/store/index.js';

export default class Count extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-count')
        });
    }
    render() {
        const suffix = store.state.items.length !== 1 ? 's' : '';
        this.element.innerHTML = `
      You have
      ${store.state.items.length}
      task${suffix} today 
    `;
    }
}