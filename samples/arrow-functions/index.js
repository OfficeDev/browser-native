(() => {
    
    function trad1 (a, b) { return a+b; }
    trad2 = function (a,b) { return a+b; }

    // It's all syntactic sugar from here!

    arrow1 = (a, b) => { return a+b; }  // Multiple args and multiple statements
    arrow2 = (a,b) => a+b;              // Multiple args, returns value by default (no other statements)
    arrow3 = a => { return a+1; }       // With one arg parenthesis are optional
    arrow4 = a => a+1;                  // With one arg, returns value by default

    const html = `All these functions are the same!
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
    