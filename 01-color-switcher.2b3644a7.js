!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),r=setInterval((function(){if(!0!==r){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}else clearInterval(r)}),1e3)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));var r=null;e.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.2b3644a7.js.map
