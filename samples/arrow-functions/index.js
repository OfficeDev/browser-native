'use strict';
(() => {
    
    // Traditional functions
    function trad1 (a, b) { return a+b; }   // Named function
    let trad2 = function (a,b) { return a+b; }  // Anonymous function

    // Arrow functions
    let arrow1 = (a, b) => { return a+b; }  // Multiple args and multiple statements
    let arrow2 = (a,b) => a+b;              // Multiple args, returns value by default (no other statements)
    let arrow3 = a => { return a+1; }       // With one arg parenthesis are optional
    let arrow4 = a => a+1;                  // With one arg, returns value by default

    const html = `
    <ul>
        <li>trad1(1,2) returns ${trad1(1,2)}</li>
        <li>trad2(1,2) returns ${trad2(1,2)}</li>
        <li>arrow1(1,2) returns ${arrow1(1,2)}</li>
        <li>arrow2(1,2) returns ${arrow2(1,2)}</li>
        <li>arrow3(1) returns ${arrow3(1)}</li>
        <li>arrow4(1) returns ${arrow4(1)}</li>
    </ul>`;
    
    document.getElementById('output').innerHTML = html;
    
})();
    