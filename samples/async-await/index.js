(() => {
    
    let catFactAPI = "https://cat-fact.herokuapp.com/facts";
    let dogFactAPI = "https://dog-api.kinduff.com/api/facts?number=2";

    function PromiseCall() {
      return new Promise((resolve, reject) => {
        fetch(catFactAPI)
        .then(response => response.json(), error => reject(error))
        .then(data => resolve(data), error => reject(error));
      });
    }

    async function AsyncCall() {
      try{
        const response = await fetch(catFactAPI);
        const data = await response.json();
        return data;
      } catch(err) {
        return err;
      }
    }
    
    PromiseCall().then(dataPromise => document.getElementById("promises-result").innerText = JSON.stringify(dataPromise));
    AsyncCall().then(dataAsync => document.getElementById("async-result").innerText = JSON.stringify(dataAsync));

})();
    