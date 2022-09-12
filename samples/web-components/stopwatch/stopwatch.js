import stylesheet from './style.css' assert { type: 'css' };
const BUTTON_KEY_PREFIX = 'stateful-button';


const TICK_INTERVAL = 1000;

export class stopwatch extends HTMLElement {

    // Component state is in these fields:
    #button;
    #currentTime = 0;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.adoptedStyleSheets = [ stylesheet ];
        this.#button = document.createElement('button');
        this.#button.innerText = this.#formatTime(this.#currentTime);

        shadowRoot.appendChild(this.#button);

        setInterval(() => {
            this.#currentTime += TICK_INTERVAL;
            this.#button.innerText = this.#formatTime(this.#currentTime);
        }, TICK_INTERVAL);    
    }

    #clickHandler() {
        this.#button.innerText = "You clicked me";
    }

    // Take a moment and avoid a dependency
    #formatTime(milliseconds) {
        const date = new Date(0);
        date.setMilliseconds(milliseconds);
        return date.toISOString().substring(11,19);
    }

    async connectedCallback() {

        this.onclick = this.#clickHandler;

    }
}

customElements.define('stop-watch', stopwatch);


