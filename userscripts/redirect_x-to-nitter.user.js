// ==UserScript==
// @name           redirect - x to nitter
// @namespace      browningluke
// @include        *x.com*
// @grant          GM_xmlhttpRequest
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

document.replaceChild(document.importNode(newDoc.documentElement, true), document.documentElement);
document.close();

// Redirect destination
var INSTANCE = "nitter.cloud.browningluke.dev";

// Thank ChatGPT for the regex
location.replace(origURL.replace(/(http(s)?\:\/\/)(?:x\.com|[^\/]+\.x\.com).*$/g, INSTANCE));
