
//Global Variable Declaration
var globalVar = "My Global Var";
let globalLet = "My Global Let";
const globalConst = "My Global Const";

(() => {
  var globalResult = document.getElementById("global-result");

  //Set the innerHTML of the result div to the values of the variables defined in the global variables section
  globalResult.innerHTML = `<div>The value of "globalVar" is: <span>${globalVar}</span></div>
    <div>The value of "globalLet" is: <span>${globalLet}</span></div>
    <div>The value of "globalConst" is: <span>${globalConst}</span></div>`;
})();
