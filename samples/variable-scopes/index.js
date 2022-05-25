(() => {

  var gVar = "My Global Var";
  let gLet = "My Global Let";
  const gConst = "My Global Const";

  document.getElementById("global-result").innerText(`gVar=${window.gVar} gLet=${window.gLet} gConst=${window.gConst}`);

  const localResult = document.getElementById("locakl-result");
  let newContent;

  //These are invalid
  newContent = document.createTextNode(`fLet=${fLet}`);
  localResult.appendChild(newContent);
  newContent = document.createTextNode(`fConst=${fConst}`);
  localResult.appendChild(newContent);

  //This is valid
  newContent = document.createTextNode(`fVar=${fVar}`);
  localResult.appendChild(newContent);

  function myFunction() {
    var fVar = "My Local Var";
    let fLet = "My Local Let";
    const fConst = "My Local Const";

    newContent = document.createTextNode(`fVar=${fVar}`);
    localResult.appendChild(newContent);
    newContent = document.createTextNode(`fLet=${fLet}`);
    localResult.appendChild(newContent);
    newContent = document.createTextNode(`fConst=${fConst}`);
    localResult.appendChild(newContent);
  }

  //These are invalid
  newContent = document.createTextNode(`fLet=${fLet}`);
  localResult.appendChild(newContent);
  newContent = document.createTextNode(`fConst=${fConst}`);
  localResult.appendChild(newContent);

  //This is valid
  newContent = document.createTextNode(`fVar=${fVar}`);
  localResult.appendChild(newContent);

})();