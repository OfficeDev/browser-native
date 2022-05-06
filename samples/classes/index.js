(() => {
    
    class Person {
        
        // Private fields
        #firstName;
        #lastName;
        
        constructor (firstName, lastName) {
            this.#firstName = firstName;
            this.#lastName = lastName;
        }
        
        getName() {
            return this.#firstName + " " + this.#lastName;
        }
    }

    class Geek extends Person {
        
        // Private fields
        #favoriteDevLanguage;
        #favoriteSciFiMovie;
        
        constructor (firstName, lastName, favoriteDevLanguage,
                     favoriteSciFiMovie)
                     {
                         // The base class is called "super"
                         super(firstName, lastName);
                         this.#favoriteDevLanguage = favoriteDevLanguage;
                         this.#favoriteSciFiMovie = favoriteSciFiMovie;
                     }
                     
        getMessage() {
            return super.getName() + " likes " + this.#favoriteDevLanguage + " and " + this.#favoriteSciFiMovie;
        }
                
    }

    var bob = new Geek ("Bob", "German", "C#", "The Matrix");
    var julie = new Geek ("Julie", "Turner", "TypeScript", "Blade Runner");

    document.getElementById('output').innerHTML = `
    <p>${bob.getMessage()}</p>
    <p>${julie.getMessage()}</p>
    `;
    
})();
    