(() => {

    // Function to add HTML to the page
    let displayHTML = "";
    function display(html) {
        displayHTML += html;
        document.getElementById('output').innerHTML = displayHTML;
    }

    // For demonstration purposes, put a name property in the
    // global object
    window.name = '(invalid name)';

    let mascot = {
        name: 'Parker',
        // In a regular function, `this` follows normal binding rules
        getMessage1: function () {
            return `Here comes ${this.name}!`;
        },
        // In an arrow function, `this` uses the parent's context, which
        // is the global object in this case.
        getMessage2: () => {
            return `Here comes ${this.name}!`;
        }
    }

    display(`Regular function: ${mascot.getMessage1()}<br />`);
    display(`Arrow function: ${mascot.getMessage2()}`);

})();
