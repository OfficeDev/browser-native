import stylesheet from './style.css' assert { type: 'css' };

const TICK_INTERVAL = 1000;

export class stopwatch extends HTMLElement {

    // Component state is in these fields:
    #buttonElement;         // Button that displays time
    #running = false;       // Current state of stopwatch
    #startTime = 0;         // Time the timer was last started
    #accumulatedTime = 0;    // Total runtime after stopping and starting

    constructor() {
        super();

        // Add the style sheet
        document.adoptedStyleSheets = [stylesheet];

        // Create and add the button element
        this.#buttonElement = document.createElement('button');
        this.#buttonElement.innerText = this.#formatTime(0);
        this.#buttonElement.style.backgroundColor =
            this.attributes['color'].value;
        this.appendChild(this.#buttonElement);

        setInterval(() => {
            if (this.#running) {
                const displayTime = Date.now() - this.#startTime + this.#accumulatedTime;
                this.#buttonElement.innerText = this.#formatTime(displayTime);
            }
        }, TICK_INTERVAL);
    }

    #clickHandler() {
        if (!this.#running) {
            // Start the timer
            this.#startTime = Date.now();
            this.#buttonElement.style.textDecoration = 'underline';
            this.#running = true;
        } else {
            // Stop the timer
            this.#accumulatedTime += Date.now() - this.#startTime;
            this.#buttonElement.style.textDecoration = 'none';
            this.#running = false;
        }
    }

    // Take a moment to avoid unneeded dependencies!
    // Convert time in ms to string in format 00:00:00
    #formatTime(milliseconds) {
        const date = new Date(0);
        date.setMilliseconds(milliseconds);
        return date.toISOString().substring(11, 19);
    }

    async connectedCallback() {
        this.onclick = this.#clickHandler;
    }
}

customElements.define('stop-watch', stopwatch);


