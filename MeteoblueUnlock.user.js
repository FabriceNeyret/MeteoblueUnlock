/// ==UserScript==
// @name        MeteoblueUnlock
// @namespace   https://github.com/FabriceNeyret/MeteoblueUnlock
// @version     1.0
// @description Unlock Meteoblue display
// @author      Fabrice Neyret
// // include     https://www.meteoblue.com/*
// @match       https://www.meteoblue.com/*
// @run-at      document-start
// @grant       GM_addStyle
// @downloadURL https://github.com/FabriceNeyret/MeteoblueUnlock.user.js
// @updateURL   https://github.com/FabriceNeyret/MeteoblueUnlock.user.js
// ==/UserScript==
//              https://github.com/FabriceNeyret/MeteoblueUnlock.user.js

// changelog:
//  

window.addEventListener("DOMContentLoaded", function() {
    console.log("MeteoblueUnlock loaded");
        setInterval(() => {
        document.body.class='';
    }, 1000 );
}, false);
