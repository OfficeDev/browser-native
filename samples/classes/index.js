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
        
        #favoriteDevLanguage;
        #favoriteSciFiMovie;
        
        constructor (firstName, lastName, favoriteDevLanguage,
                     favoriteSciFiMovie)
                     {
                         super(firstName, lastName);
                         this.#favoriteDevLanguage = favoriteDevLanguage;
                         this.#favoriteSciFiMovie = favoriteSciFiMovie;
                     }
                     
        getMessage() {
            return super.getName() + " likes " + me.#favoriteDevLanguage + " and " + me.#favoriteSciFiMovie;
        }
                
    }

    var me = new Geek ("Bob", "German", "TypeScript", "Forbidden Planet");

    var result = me.getMessage() 

    document.getElementById('output').innerText = result;
    
})();
    