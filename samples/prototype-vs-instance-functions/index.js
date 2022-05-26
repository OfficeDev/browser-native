(() => {
    
    // Quick review of the this keyword in classic JavaScript:
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
    
    class Person {
        
        constructor (firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        // Prototype method - this behaves like classic JavaScript
        getName() {  // function getName() { // Wouldn't work - syntax error
            if (!this) {
                return 'ERROR: <i>this</i> is undefined in getName()';
            }
            return this.firstName + " " + this.lastName;
        }
        
        // Instance method - this behaves like an object oriented language
        getGreeting = () => { // getGreeting = function () {  // Works the same
            if (!this) {
                return 'ERROR: <i>this</i> is undefined in getGreeting()';
            }
            return "Hello " + this.firstName;
        }
    }

    var me = new Person("Bob", "German");

    var result = 'Direct calls:<br /><ul>' +
                 '<li>prototype: ' + me.getName() + '</li>' +
                 '<li>instance: ' + me.getGreeting() + '</li>' +
                 '</ul>';
                 
    var you = {
        firstName: 'Julie',
        lastName: 'Turner',
        getName: me.getName,            // Prototype function will reference this object
        getGreeting: me.getGreeting     // Instance function will reference original object
    }
    
    result += 'Call via a 2nd object:<br /><ul>' +
              '<li>prototype: ' + you.getName() + '</li>' +
              '<li>instance: ' + you.getGreeting() + '</li>' +
              '</ul>'

    document.getElementById('output').innerHTML = result;
    
})();
    