// ==UserScript==
// @name           redirect - imgur to rimgo
// @namespace      browningluke
// @match          http://imgur.com/*
// @match          https://imgur.com/*
// @match          http://i.imgur.com/*
// @match          https://i.imgur.com/*
// @match          http://www.imgur.com/*
// @match          https://www.imgur.com/*
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
var INSTANCE = "https://rimgo.cloud.browningluke.dev";
location.replace(origURL.replace(/(http(s)?\:\/\/)?(.*\.)?imgur.com/g, INSTANCE));
