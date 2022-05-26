(() => {
    
    const a = 1, b=2;

    let html = '';
    // The old way can be a bit hard to read
    html += '<p>Old school: a=' + a + ', b=' + b; + '</p>';

    // Template string literals, delimited with backticks, is easier to read
    html += `<p>With template string: a=${a}, b=${b}</p>`;

    // You must escape the back tick and dollar signs in your template strings
    html += `<p>This is a backtick \` and this is a dollar sign \$ and still, a=${a}`;

    // You can even include newlines and it starts looking a bit like React JSX syntax!
    html += `<p>
                This is a multi-line template string:
                <span>a=${a}, b=${b}</span>
             </p>`;

    document.getElementById('output').innerHTML = html;

    // FYI - you can also write a function to handle template literals in code,
    // and tag them with the function name. For details, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    
})();
    