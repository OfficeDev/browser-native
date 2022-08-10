(() => {

    // For demonstration purposes, put a name property in the
    // global object
    window.name = 'a property in the window object';

    let mascot = {
        name: 'Parker',
        // In a regular function, `this` follows normal binding rules
        setAlarm1: function (timeout) {
            setTimeout(function () {
                // this is the global object
                alert (`Hey ${this.name}, time to wake up!`)
            }, timeout);
        },
        // In an arrow function, `this` uses the parent's context, which
        // is the global object in this case.
        setAlarm2: function (timeout) {
            setTimeout(() => {
                alert (`Hey ${this.name}, time to wake up!`)
            }, timeout);
        }
    }

    mascot.setAlarm1(2000);
    mascot.setAlarm2(4000);

})();
