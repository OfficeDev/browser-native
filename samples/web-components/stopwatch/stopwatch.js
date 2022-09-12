import stylesheet from './style.css' assert { type: 'css' };
const BUTTON_KEY_PREFIX = 'stateful-button';

export class stopwatch extends HTMLElement {

    // Component state is in these fields:
    #button;
    #currentTime = 0;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.adoptedStyleSheets = [ stylesheet ];
        this.#button = document.createElement('button');
        this.#button.innerText = this.#currentTime;
        shadowRoot.appendChild(this.#button);
    }

    #clickHandler() {
        this.#button.innerText = "You clicked me";
    }

    async connectedCallback() {

        this.onclick = this.#clickHandler;
        this.render();

    }
}

customElements.define('stop-watch', stopwatch);


