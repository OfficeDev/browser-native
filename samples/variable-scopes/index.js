
  var gVar = "My Global Var";
  let gLet = "My Global Let";
  const gConst = "My Global Const";

(() => {
  document.getElementById("global-result").innerText = `gVar=${gVar} gLet=${gLet} gConst=${gConst}`;
  const localResult = document.getElementById("local-result");

  function ScopeTest () {
    var gVar = "My Global Var (Reassigned Functionally)";
    
    localResult.appendChild(document.createElement("div")).innerText = `  gVar=${(typeof gVar == "undefined")?"undefined":gVar}`;    
    localResult.appendChild(document.createElement("br"));

    if (true) {
      var gVar = "My Global Var (Reassigned Locally)";
      
      localResult.appendChild(document.createElement("div")).innerText = "Inside {} - These are valid";
      localResult.appendChild(document.createElement("div")).innerText = `  gVar=${(typeof gVar == "undefined")?"undefined":gVar}`;
      localResult.appendChild(document.createElement("br"));
    }
    
    localResult.appendChild(document.createElement("div")).innerText = "After {} - This is valid";
    localResult.appendChild(document.createElement("div")).innerText = `  gVar=${(typeof gVar == "undefined")?"undefined":gVar}`;
  }
  
  ScopeTest();

  localResult.appendChild(document.createElement("br"));
  localResult.appendChild(document.createElement("div")).innerText = "After Function - This is valid";
  localResult.appendChild(document.createElement("div")).innerText = `  gVar=${(typeof gVar == "undefined")?"undefined":gVar}`;
  })();
