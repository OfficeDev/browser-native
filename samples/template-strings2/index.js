(() => {
    
    const mascot = {
        name: 'Parker',
        species: 'porcupine'
    };
    
    // Template function
    function shout(strings, name, species) {
      return `${strings[0]}${name.toUpperCase()}
              ${strings[1]}${species.toUpperCase()}
              ${strings[2]}`;
    }
    
    const html = shout`Did you know ${mascot.name} is a ${mascot.species}?`;
    document.getElementById('output').innerHTML = html;

})();
    