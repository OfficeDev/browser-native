import stylesheet from './style.css' assert { type: 'css' };

const TICK_INTERVAL = 1000;

export class stopwatch extends HTMLElement {

    // Component state is in these fields:
    #buttonElement;
    #startTime = Date.now();
    #running = false;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.adoptedStyleSheets = [ stylesheet ];

        this.#buttonElement = document.createElement('button');
        this.#buttonElement.innerText = this.#formatTime(0);
        shadowRoot.appendChild(this.#buttonElement);

        setInterval(() => {
            if (this.#running) {
                const currentTime = Date.now() - this.#startTime;
                this.#buttonElement.innerText = this.#formatTime(currentTime);    
            }
        }, TICK_INTERVAL);    
    }

    #clickHandler() {
        if (!this.#running) {
            if (this.#buttonElement.innerHTML === this.#formatTime(0)) {
                // Watch was already reset; start it now
                this.#startTime = Date.now();
                this.#running = true;
            } else {
                // Reset the watch to 0
                this.#buttonElement.innerHTML = this.#formatTime(0);
            }
        } else {
            // Stop the watch
            this.#running = false;
        }
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


