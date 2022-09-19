//Global Variable Declaration
var globalVar = "My Global Var";
let globalLet = "My Global Let";
const globalConst = "My Global Const";

(() => {
  var globalResult = document.getElementById("global-result");
  var functionResult = document.getElementById("function-result");

  //Define a function
  function FunctionScopeEx() {
    var functionVar = "My Function Var";
    let functionLet = "My Function Let";
    const functionConst = "My Function Const";

    //Set the innerHTML of the result div to the values of the variables defined in the function variables section
    functionResult.innerHTML = `<div>The value of "globalVar" is: <span>${globalVar}</span></div>
    <div>The value of "globalLet" is: <span>${globalLet}</span></div>
    <div>The value of "globalConst" is: <span>${globalConst}</span></div>
    <br/>
    <div>The value of "functionVar" is: <span>${functionVar}</span></div>
    <div>The value of "functionLet" is: <span>${functionLet}</span></div>
     <div>The value of "functionConst" is: <span>${functionConst}</span></div>`;
  }

  FunctionScopeEx();

  //Set the innerHTML of the result div to the values of the variables defined in the global variables section
  globalResult.innerHTML = `<div>The value of "functionVar" is: <span>${(typeof functionVar == "undefined") ? "undefined" : functionVar}</span></div>
    <div>The value of "functionLet" is: <span>${(typeof functionLet == "undefined") ? "undefined" : functionLet}</span></div>
    <div>The value of "functionConst" is: <span>${(typeof functionLet == "undefined") ? "undefined" : functionConst}</span></div>`;
})();
