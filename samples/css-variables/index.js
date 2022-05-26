(() => {
    
    function changeColor(event) {
      document.getElementById("output3").setAttribute("style","--main-color:pink");
    }

    document.getElementById("output3button").addEventListener("click", changeColor);
    
})();
    