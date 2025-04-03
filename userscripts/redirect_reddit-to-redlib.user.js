// ==UserScript==
// @name           redirect - reddit to redlib
// @namespace      browningluke
// @include        *reddit.com*
// @grant          none
// @run-at         document-start
// ==/UserScript==

// Grab URL
var origURL = location.href
console.log(origURL);

// Prevent content from loading
var newDoc = document.implementation.createHTMLDocument (""),
    h1 = document.createElement("h1");

h1.innerText = "Redirecting, please wait...";
newDoc.body.appendChild(h1);

document.replaceChild (document.importNode(newDoc.documentElement, true), document.documentElement);
document.close();

// Redirect destination
var INSTANCE = "https://libreddit.cloud.browningluke.dev";
location.replace(origURL.replace(/(http(s)?\:\/\/)?(.*\.)?reddit.com/g, INSTANCE));
