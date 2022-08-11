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
        
        // Prototype method - `this` behaves like classic JavaScript
        getName1() {  // function getName() { // Wouldn't work - syntax error
            return this.firstName + " " + this.lastName;
        }
        
        // Instance method - `this` is lexically tied to the class
        // definition, so behaves more like a Java or C# object
        getName2 = () => { // getGreeting = function () {  // Works the same
            return this.firstName + " " + this.lastName;
        }
    }

    var me = new Person("Bob", "German");

    var result = 'Direct calls:<br /><ul>' +
                 '<li>Regular function: ' + me.getName1() + '</li>' +
                 '<li>Arrow function: ' + me.getName2() + '</li>' +
                 '</ul>';
                 
    var you = {
        firstName: 'Julie',
        lastName: 'Turner',
        getName: me.getName1,            // Prototype function will reference this object
        getGreeting: me.getName2     // Instance function will reference original object
    }
    
    result += 'Call via a 2nd object:<br /><ul>' +
              '<li>Regular function: ' + you.getName() + '</li>' +
              '<li>Arrow function: ' + you.getGreeting() + '</li>' +
              '</ul>'

    document.getElementById('output').innerHTML = result;
    
})();
    