
  var gVar = "My Global Var";
  let gLet = "My Global Let";
  const gConst = "My Global Const";

(() => {
  document.getElementById("global-result").innerText = `gVar=${window.gVar} gLet=${window.gLet} gConst=${window.gConst}`;

  const localResult = document.getElementById("local-result");
  var fVar = "My Function Var";
  let fLet = "My Function Let";
  const fConst = "My Function Const";

  localResult.appendChild(document.createElement("div")).innerText = `fLet=${(typeof fLet == "undefined")?"undefined":fLet}`;
  localResult.appendChild(document.createElement("div")).innerText = `fConst=${(typeof fConst == "undefined")?"undefined":fConst}`;
  localResult.appendChild(document.createElement("div")).innerText = `fVar=${(typeof fVar == "undefined")?"undefined":fVar}`;
  localResult.appendChild(document.createElement("br"));

  if (true) {
    var lVar = "My Local Var";
    let lLet = "My Local Let";
    const lConst = "My Local Const";

    localResult.appendChild(document.createElement("div")).innerText = "Inside {} - These are valid";
    localResult.appendChild(document.createElement("div")).innerText = `fVar=${(typeof fVar == "undefined")?"undefined":fVar}`;
    localResult.appendChild(document.createElement("div")).innerText = `fLet=${(typeof fLet == "undefined")?"undefined":fLet}`;
    localResult.appendChild(document.createElement("div")).innerText = `fConst=${(typeof fConst == "undefined")?"undefined":fConst}`;
    localResult.appendChild(document.createElement("br"));
    localResult.appendChild(document.createElement("div")).innerText = `lVar=${(typeof lVar == "undefined")?"undefined":lVar}`;
    localResult.appendChild(document.createElement("div")).innerText = `lLet=${(typeof lLet == "undefined")?"undefined":lLet}`;
    localResult.appendChild(document.createElement("div")).innerText = `lConst=${(typeof lConst == "undefined")?"undefined":lConst}`;
    localResult.appendChild(document.createElement("br"));
  }
  
  localResult.appendChild(document.createElement("div")).innerText = "This is valid";
  localResult.appendChild(document.createElement("div")).innerText = `lVar=${(typeof lVar == "undefined")?"undefined":lVar}`;
  localResult.appendChild(document.createElement("div")).innerText = "These are not valid";
  localResult.appendChild(document.createElement("div")).innerText = `lLet=${(typeof lLet == "undefined")?"undefined":lLet}`;
  localResult.appendChild(document.createElement("div")).innerText = `lConst=${(typeof lConst == "undefined")?"undefined":lConst}`;

})();