(() => {
    
    let nwProductsAPI = "https://services.odata.org/Experimental/OData/OData.svc/Products";
    let nwCategoriesAPI = "https://services.odata.org/Experimental/OData/OData.svc/Categories";

    function PromiseCall() {
      return new Promise((resolve, reject) => {
        fetch(nwProductsAPI)
        .then(response => response.json(), error => reject(error))
        .then(data => {
          const elementNumber = Math.floor(Math.random() * data.value.length);
          resolve(data.value[elementNumber].Name)
        }, error => reject(error));
      });
    }

    async function AsyncCall() {
      try{
        const response = await fetch(nwProductsAPI);
        const data = await response.json();
        const elementNumber = Math.floor(Math.random() * data.value.length);
        return data.value[elementNumber].Name;
      } catch(err) {
        return err;
      }
    }

    async function TwoAsyncCall() {
      try{
        const promises = [];
        promises.push(fetch(nwProductsAPI));
        promises.push(fetch(nwCategoriesAPI));

        const results = await Promise.all(promises);
        
        const dataProducts = await results[0].json();
        const elementNumberProduct = Math.floor(Math.random() * dataProducts.value.length);
        const product = `<div>${dataProducts.value[elementNumberProduct].Name}</div>`;

        const dataCategory = await results[1].json();
        const elementNumberCategory = Math.floor(Math.random() * dataCategory.value.length);
        const category = `<div>${dataCategory.value[elementNumberCategory].Name}</div>`;
        return `${product}${category}`;
      } catch(err) {
        return err;
      }
    }
    
    PromiseCall().then(dataPromise => document.getElementById("promises-result").innerText = dataPromise);
    AsyncCall().then(dataAsync => document.getElementById("async-result").innerText = dataAsync);
    TwoAsyncCall().then(dataTwoAsync => document.getElementById("twoasync-result").innerHTML = dataTwoAsync);
    
})();
    