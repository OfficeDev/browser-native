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

