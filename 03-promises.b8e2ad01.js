function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=r);var i=r("eWCmQ");const l=document.querySelector(".form"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function s(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(o){o.preventDefault();const t=u.value,n=a.value,r=d.value;let l=t;for(let o=1;o<=r;o+=1)s(o,l).then((({position:o,delay:t})=>e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`))).catch((({position:o,delay:t})=>e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`))),l+=n}));
//# sourceMappingURL=03-promises.b8e2ad01.js.map
