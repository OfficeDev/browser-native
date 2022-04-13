import  "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js";
import "/github-embed-gh-pages/github-embed.min.js";

const body = window.document.getElementsByTagName('body')[0];
const listingContainer = window.document.createElement('span');
body.appendChild(listingContainer);
listingContainer.innerHTML = `
<link rel="stylesheet" href="/github-embed-gh-pages/github-embed.css">
<div id="listings" style="height: 70vh; width:60%; float:right;">Listing</div>
`;

window.onload = async (ev) => {

    window.githubEmbed(listingContainer, {
        "owner": "OfficeDev",
        "repo": "browser-native",
        "ref": "gh-pages",
        "embed": [{
            "type": "html",
            "label": "index.html",
            "path": "samples/objects/index.html"
        }, {
            "type": "js",
            "label": "index.js",
            "path": "samples/objects/index.js"
        }]
    });
};

