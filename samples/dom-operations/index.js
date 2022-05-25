(() => {
    
    
  function createElement(event) {
    const newElement = document.createElement("div");
    newElement.innerText = "This is a new element";
    document.getElementById("new-element").appendChild(newElement);
  }

  function appendChild(event) {
    const newElement = document.createElement("li");
    newElement.innerText = "Item 3";
    document.getElementById("append-item").appendChild(newElement);
  }

  function setAttribute(event) {
    document.getElementById("get-attribute").style.backgroundColor = "pink";
    document.getElementById("get-attribute").innerText = document.getElementById("get-attribute").style.backgroundColor;
  }

  document.getElementById("create-element").addEventListener("click", createElement);
  document.getElementById("append-child").addEventListener("click", appendChild);
  document.getElementById("set-attribute").addEventListener("click", setAttribute);
  document.getElementById("get-attribute").innerText = document.getElementById("get-attribute").style.backgroundColor;

})();
    