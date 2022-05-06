(() => {
    
    let catFactAPI = "https://cat-fact.herokuapp.com/facts";
    let animeFactAPI = "https://anime-facts-rest-api.herokuapp.com/api/v1/black_clover";

    function PromiseCall() {
      return new Promise((resolve, reject) => {
        fetch(catFactAPI)
        .then(response => response.json(), error => reject(error))
        .then(data => {
          const elementNumber = Math.floor(Math.random() * data.length);
          resolve(data[elementNumber].text)
        }, error => reject(error));
      });
    }

    async function AsyncCall() {
      try{
        const response = await fetch(catFactAPI);
        const data = await response.json();
        const elementNumber = Math.floor(Math.random() * data.length);
        return data[elementNumber].text;
      } catch(err) {
        return err;
      }
    }

    async function TwoAsyncCall() {
      try{
        const promises = [];
        promises.push(fetch(catFactAPI));
        promises.push(fetch(animeFactAPI));

        const results = await Promise.all(promises);
        
        const dataCats = await results[0].json();
        const elementNumberCat = Math.floor(Math.random() * dataCats.length);
        const catFact = `<div>${dataCats[elementNumberCat].text}</div>`;

        const dataAnime = await results[1].json();
        const elementNumberAnime = Math.floor(Math.random() * dataAnime.data.length);
        const animeFact = `<div>${dataAnime.data[elementNumberAnime].fact}</div>`;
        return `${catFact}${animeFact}`;
      } catch(err) {
        return err;
      }
    }
    
    PromiseCall().then(dataPromise => document.getElementById("promises-result").innerText = dataPromise);
    AsyncCall().then(dataAsync => document.getElementById("async-result").innerText = dataAsync);
    TwoAsyncCall().then(dataTwoAsync => document.getElementById("twoasync-result").innerHTML = dataTwoAsync);
    
})();
    