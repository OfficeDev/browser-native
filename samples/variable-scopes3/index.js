//Global Variable Declaration
var globalVar = "My Global Var";
let globalLet = "My Global Let";
const globalConst = "My Global Const";

(() => {
  var globalResult = document.getElementById("global-result");
  var functionResult = document.getElementById("function-result");
  var blockResult = document.getElementById("block-result");

  //Define a function
  function FunctionScopeEx() {
    var functionVar = "My Function Var";
    let functionLet = "My Function Let";
    const functionConst = "My Function Const";

    if (true) {
      var blockVar = "My Block Var";
      let blockLet = "My Block Let";
      const blockConst = "My Block Const";

      //Set the innerHTML of the result div to the values of the variables defined in the block variables section
      blockResult.innerHTML = `<div>The value of "blockVar" is: <span>${blockVar}</span></div>
        <div>The value of "blockLet" is: <span>${blockLet}</span></div>
        <div>The value of "blockConst" is: <span>${blockConst}</span></div>
        <br/>
        <div>The value of "functionVar" is: <span>${functionVar}</span></div>
        <div>The value of "functionLet" is: <span>${functionLet}</span></div>
        <div>The value of "functionConst" is: <span>${functionConst}</span></div>
        <br/>
        <div>The value of "functionVar" is: <span>${functionVar}</span></div>
        <div>The value of "functionLet" is: <span>${functionLet}</span></div>
        <div>The value of "functionConst" is: <span>${functionConst}</span></div>`;
    }

    //Set the innerHTML of the result div to the values of the variables defined in the function variables section
    functionResult.innerHTML = `<div>The value of "blockVar" is: <span>${(typeof blockVar == "undefined") ? "undefined" : blockVar}</span></div>
    <div>The value of "blockLet" is: <span>${(typeof blockLet == "undefined") ? "undefined" : blockLet}</span></div>
    <div>The value of "blockConst" is: <span>${(typeof blockConst == "undefined") ? "undefined" : blockConst}</span></div>
    <br/>`;
  }

  FunctionScopeEx();

  //Set the innerHTML of the result div to the values of the variables defined in the global variables section
  globalResult.innerHTML = `<div>The value of "blockVar" is: <span>${(typeof blockVar == "undefined") ? "undefined" : blockVar}</span></div>
    <div>The value of "blockLet" is: <span>${(typeof blockLet == "undefined") ? "undefined" : blockLet}</span></div>
    <div>The value of "blockConst" is: <span>${(typeof blockConst == "undefined") ? "undefined" : blockConst}</span></div>
    <br/>`;
})();
