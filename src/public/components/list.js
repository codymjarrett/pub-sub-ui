import Component from '../lib/component.js';
import store from '../js/store/index.js';

export default class List extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-items')
        });
    }
    render() {

        if (store.state.items.length === 0) {
            this.element.innerHTML = `<p class="no-items">You have no tasks yet </p>`;
            return;
        }

        this.element.innerHTML = `
      <ul class="app__items">
        ${store.state.items.map(item => {
            return `
            <li>${item}<button aria-label="Delete this item" class="delete-button">×</button></li>
          `
        }).join('')}
      </ul>
    `;
        this.element.querySelectorAll('.delete-button').forEach((button, index) => {
            button.addEventListener('click', () => {
                store.dispatch('clearItem', { index });
            });
        });
    }
};