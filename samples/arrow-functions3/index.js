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
        setAlarm1: function (timeout) {
            setTimeout(function () {
                // In a regular function, `this` follows normal binding rules
                // so `this` is the global object
                display(`Hey ${this.name}, time to wake up!<br />`)
            }, timeout);
        },

        setAlarm2: function (timeout) {
            // In an arrow function, `this` uses the parent's context, which
            // is the global object in this case.
            setTimeout(() => {
                display(`Hey ${this.name}, time to wake up!<br />`)
            }, timeout);
        }
    }

    mascot.setAlarm1(1000);
    mascot.setAlarm2(2000);

})();
