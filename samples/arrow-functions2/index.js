(() => {

    // For demonstration purposes, put a name property in the
    // global object
    window.name = 'a property in the window object';

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

    var result = '<ul>' +
        '<li>Regular function: ' + mascot.getMessage1() + '</li>' +
        '<li>Arrow function: ' + mascot.getMessage2() + '</li>' +
        '</ul>';

    document.getElementById('output').innerHTML = result;

})();
