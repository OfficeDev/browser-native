'use strict';
(async () => {

    const params = new URLSearchParams(window.location.search);
    const sample = params.get('sample');

    const sampleUrl = `${window.location.origin}${window.location.pathname}${sample}/`
        .replace('/listing/', '/samples/');

    const response = await fetch(`${sampleUrl}details.json`);
    const details = await (response.json());

    document.getElementById('title').innerText +=
        ` | ${details.title.toLowerCase()}`;
    document.getElementById('description').innerHTML = details.description;

    let navHtml = "";
    if (details.nav && details.nav.length > 1) {
        navHtml = "Samples in this set: ";
        let i = 1;
        details.nav.forEach((e) => {
            if (sample === e) {
                if (i > 1) {
                    document.getElementById('title').innerText += " " + i;
                }
                navHtml += `<b>${i++}</b>&nbsp;`;
            } else {
                navHtml += `<a href="${window.location.href.replace(sample, e)}">${i++}</a>&nbsp;`;
            }
        })
    }
    document.getElementById('nav').innerHTML = navHtml;

    if (details.subtitle) {
        document.getElementById('title').innerText += " - " + details.subtitle;
    }

    const embed = details.files.map(f => ({
        "type": f.split('.').pop(),
        "label": f,
        "path": `samples/${sample}/${f}`
    }));
    embed.push({
        "type": "htmlpage",
        "label": "result",
        "url": `${sampleUrl}`
    });

    window.githubEmbed('#listings', {
        "owner": "OfficeDev",
        "repo": "browser-native",
        "ref": "main",
        "embed": embed
    });

})();

