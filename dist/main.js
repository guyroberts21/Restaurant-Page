!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){!function(){const e=document.createElement("div");e.id="breakfast";const t=document.createElement("div");t.classList.add("breakfast-items");const n=document.createElement("div");n.textContent="Toasted Bagel",t.appendChild(n);const d=document.createElement("div");d.textContent="£3.99",t.appendChild(d);const o=document.createElement("div");o.textContent="Gingerbread man",t.appendChild(o);const a=document.createElement("div");a.textContent="£1.49",t.appendChild(a);const i=document.createElement("div");i.textContent="Waffle (with maple syrup)",t.appendChild(i);const l=document.createElement("div");l.textContent="£3.99",t.appendChild(l);const r=document.createElement("div");r.textContent="Sausage and Eggs",t.appendChild(r);const u=document.createElement("div");u.textContent="£6.99",t.appendChild(u);const m=document.createElement("div");m.textContent="Fruit Salad",t.appendChild(m);const p=document.createElement("div");p.textContent="£2.99",t.appendChild(p);const s=document.createElement("div");s.textContent="Full English Breakfast",t.appendChild(s);const C=document.createElement("div");C.textContent="£8.99",t.appendChild(C),e.appendChild(t),c.appendChild(e)}(),function(){const e=document.createElement("div");e.id="lunch";const t=document.createElement("div");t.classList.add("lunch-items");const n=document.createElement("div");n.textContent="Ham Sandwich",t.appendChild(n);const d=document.createElement("div");d.textContent="£5.99",t.appendChild(d);const o=document.createElement("div");o.textContent="Classic Burger",t.appendChild(o);const a=document.createElement("div");a.textContent="£11.99",t.appendChild(a);const i=document.createElement("div");i.textContent="Roasted Chicken (served with brioche bun)",t.appendChild(i);const l=document.createElement("div");l.textContent="£8.99",t.appendChild(l),e.appendChild(t),c.appendChild(e)}(),function(){const e=document.createElement("div");e.id="dinner";const t=document.createElement("div");t.classList.add("dinner-items");const n=document.createElement("div");n.textContent="Steak and Chips",t.appendChild(n);const d=document.createElement("div");d.textContent="£10.99",t.appendChild(d);const o=document.createElement("div");o.textContent="Mushroom Risotto",t.appendChild(o);const a=document.createElement("div");a.textContent="£9.99",t.appendChild(a);const i=document.createElement("div");i.textContent="Pepperoni Pizza",t.appendChild(i);const l=document.createElement("div");l.textContent="£10.99",t.appendChild(l);const r=document.createElement("div");r.textContent="Spaghetti Bolognaise",t.appendChild(r);const u=document.createElement("div");u.textContent="£7.99",t.appendChild(u),e.appendChild(t),c.appendChild(e)}()}n.r(t),n.d(t,"content",(function(){return o})),n.d(t,"main",(function(){return c}));const o=document.getElementById("content");!function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("img");t.id="logo",t.src="./img/logo.png",e.appendChild(t);const n=document.createElement("span");n.classList.add("restaurant-name"),n.textContent="Parallax Restaurant",e.appendChild(n);const d=document.createElement("ul");d.classList.add("top-navigation");const c=document.createElement("li");c.id="menu",c.textContent="Menu",d.appendChild(c);const a=document.createElement("li");a.id="about",a.textContent="About",d.appendChild(a);const i=document.createElement("li");i.id="contact",i.textContent="Contact",d.appendChild(i);const l=document.createElement("div");l.id="main";const r=document.createElement("div");r.classList.add("center-text-container");const u=document.createElement("h1");u.classList.add("center-text"),u.textContent="Indulge Yourself.",r.appendChild(u),l.appendChild(r),o.appendChild(e),o.appendChild(d),o.appendChild(l)}();const c=document.getElementById("main");document.querySelectorAll(".top-navigation li").forEach(e=>e.addEventListener("click",e=>{switch(c.innerHTML="",e.target.id){case"menu":d();break;case"about":renderAbout();break;case"contact":renderContact()}}))}]);