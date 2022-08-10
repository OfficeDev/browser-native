(() => {

    // Quick review of the this keyword rules:
    //
    // In a JavaScript function, the value of this is determined
    // not by the function itself but by the way it is invoked.
    // Here are the rules in order of precidence:
    //
    // 1 - If you use the new keyword, this is the new object
    // 2 - If you use apply, bind, or call, you specify this
    // 3 - If you invoke the function in the form 
    //     someObject.myFunc(), this is someObject
    // 4 - If in strict mode, this will be undefined
    //     NOTE: Code in a class is always in strict mode!
    // 5 - Otherwise this will be the global object

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
