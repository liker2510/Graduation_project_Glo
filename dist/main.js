(()=>{"use strict";const e=({formId:e,someElem:t=[]})=>{const r=document.getElementById(e),s=document.querySelector(".popup-thank"),a=r.querySelector('input[type="checkbox"]'),i=document.createElement("div");i.style="color: black;";s.addEventListener("click",(e=>{e.target.matches(".close-thank")&&e.target.matches(".close-thank")&&(s.style="")}));try{if(!r)throw new Error("Верните форму на место, пожалуйста");r.addEventListener("submit",(e=>{e.preventDefault(),!0===a.checked?(i.textContent="",(()=>{const e=r.querySelectorAll("input"),t=new FormData(r),a={};var i;s.style="visibility: inherit;",t.forEach(((e,t)=>{a[t]=e})),console.log("submit"),console.log(),(i=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value=""}))}))})()):(i.textContent="Заполните все поля!",r.append(i))}))}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".header-contacts__arrow"),t=document.getElementById("scrollPhone"),r=document.querySelector(".header-contacts__arrow"),s=document.querySelector(".menu>.menu__icon"),a=document.querySelector(".popup"),i=document.querySelector(".popup-dialog-menu"),n=document.querySelectorAll('a[href^="#"]');for(let e of n)e.addEventListener("click",(function(t){t.preventDefault();const r=e.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"})}));s.addEventListener("click",(()=>{i.classList.add("showHide-menu")})),a.addEventListener("click",(e=>{(e.target.classList.contains("menu-link")||e.target.classList.contains("close-menu"))&&i.classList.remove("showHide-menu")})),e.addEventListener("click",(()=>{r.classList.toggle("header-accord-arrow-active"),t.classList.toggle("header-accord-active")}))})(),(()=>{const e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".open_popup"),r=document.querySelector(".popup-privacy"),s=document.querySelectorAll(".link-privacy"),a=document.getElementById("formula").querySelectorAll(".formula-item__icon"),i=document.querySelectorAll(".button_wide"),n=document.querySelector(".popup-consultation");i.forEach((e=>{e.addEventListener("click",(()=>{n.style="visibility: inherit;"}))})),a.forEach((e=>{e.addEventListener("mouseover",(()=>{e.classList.add("active-item"),(({timing:e,draw:t,duration:r})=>{let s=performance.now();requestAnimationFrame((function a(i){let n=(i-s)/r;n>1&&(n=1);let c=e(n);t(c),n<1&&requestAnimationFrame(a)}))})({duration:300,timing:e=>1-Math.sin(Math.acos(e)),draw(t){e.firstElementChild.style.opacity=t}})})),e.addEventListener("mouseout",(()=>{e.classList.remove("active-item")}))})),s.forEach((e=>{e.addEventListener("click",(()=>{r.style="visibility: inherit;"}))})),t.forEach((t=>{t.addEventListener("click",(()=>{e.style="visibility: inherit;"}))})),document.body.addEventListener("click",(t=>{t.target.classList.contains("close")&&(e.style="",r.style="",n.style="")}))})(),(()=>{function e(e){if(this.el=this.getElement(e.selector),!this.el)return console.log("Что-то не так с селектором");this.layout=e.layout||"+7 (___) ___-__-__",this.maskreg=this.getRegexp(),this.setListeners()}window.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll("input[name=phone]");Array.prototype.forEach.call(t,(function(t){new e({selector:t,layout:t.dataset.mask})}))})),e.prototype.getRegexp=function(){var e=this.layout.replace(/_/g,"\\d");return(e=(e=(e=e.replace(/\(/g,"\\(")).replace(/\)/g,"\\)")).replace(/\+/g,"\\+")).replace(/\s/g,"\\s")},e.prototype.mask=function(e){var t=e.target,r=this.layout,s=0,a=r.replace(/\D/g,""),i=t.value.replace(/\D/g,"");a.length>=i.length&&(i=a),t.value=r.replace(/./g,(function(e){return/[_\d]/.test(e)&&s<i.length?i.charAt(s++):s>=i.length?"":e})),"blur"==e.type?new RegExp(this.maskreg).test(t.value)||(t.value=""):this.setCursorPosition(t.value.length,t)},e.prototype.setCursorPosition=function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var r=t.createTextRange();r.collapse(!0),r.moveEnd("character",e),r.moveStart("character",e),r.select()}},e.prototype.setListeners=function(){this.el.addEventListener("input",this.mask.bind(this),!1),this.el.addEventListener("focus",this.mask.bind(this),!1),this.el.addEventListener("blur",this.mask.bind(this),!1)},e.prototype.getElement=function(e){if(void 0===e)return!1;if(this.isElement(e))return e;if("string"==typeof e){var t=document.querySelector(e);if(this.isElement(t))return t}return!1},e.prototype.isElement=function(e){return e instanceof Element||e instanceof HTMLDocument}})(),(()=>{const e=document.querySelector("#repair-types"),t=document.querySelectorAll(".repair-types-slider>.slider__type"),r=document.querySelectorAll(".repair-types-nav__item"),s=document.querySelector(".slider-counter-content__current"),a=document.querySelector(".slider-counter-content__total");let i=document.querySelectorAll(".types-repair1>.repair-types-slider__slide"),n=0;const c=(e,t,r)=>{e[t].classList.add(r)},o=(e,t,r)=>{e[t].classList.remove(r)},l=t=>{let r=0;s.innerText=1,a.innerText=t.length,e.addEventListener("click",(e=>{e.preventDefault(),c(t,r,"dnone"),e.target.matches("#repair-types-arrow_right, #svg-right, #path-right, #repair-types-arrow_left, #svg-left, #path-left")&&(e.target.matches("#repair-types-arrow_right, #svg-right, #path-right")?r++:e.target.matches("#repair-types-arrow_left, #svg-left, #path-left")&&r--,r>=t.length&&(r=0),r<0&&(r=t.length-1),o(t,r,"dnone"),s.innerText=r+1)}))};l(i),e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("repair-types-nav__item")&&(c(t,n,"dnone"),o(r,n,"active"),e.target.classList.contains("repair-types-nav__item")&&r.forEach(((t,r)=>{e.target===t&&(n=r)})),"Частичный ремонт"===e.target.outerText?(i=document.querySelectorAll(".types-repair1>.repair-types-slider__slide"),l(i)):"Косметический ремонт"===e.target.outerText?(i=document.querySelectorAll(".types-repair2>.repair-types-slider__slide"),l(i)):"Капитальный ремонт"===e.target.outerText?(i=document.querySelectorAll(".types-repair3>.repair-types-slider__slide"),l(i)):"Евроремонт ремонт"===e.target.outerText?(i=document.querySelectorAll(".types-repair4>.repair-types-slider__slide"),l(i)):"Индивидуальный ремонт"===e.target.outerText&&(i=document.querySelectorAll(".types-repair5>.repair-types-slider__slide"),l(i)),o(t,n,"dnone"),c(r,n,"active"))}))})(),document.querySelectorAll(".title_block").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("msg-active")}))})),(()=>{const e=document.querySelectorAll(".transparency-item"),t=document.querySelector(".transparency-slider-wrap"),r=document.querySelector(".popup-transparency"),s=document.querySelectorAll(".transparency-item__img"),a=document.querySelectorAll(".popup-transparency-slider__slide");let i=0;t.addEventListener("click",(t=>{t.target.matches(".slider-arrow_right, .slider-arrow_left, .transparency-item__img, svg, path")&&(t.target.matches(".transparency-item__img")&&(r.style="visibility: visible;",t.target===s[0]&&a[0].classList.add("popup-transparency-slider__slide-active"),t.target===s[1]&&a[1].classList.add("popup-transparency-slider__slide-active"),t.target===s[2]&&a[2].classList.add("popup-transparency-slider__slide-active")),"transparency-item-active",e[i].classList.remove("transparency-item-active"),t.target.matches(".slider-arrow_right, svg, path")?i++:t.target.matches(".slider-arrow_left, svg, path")&&i--,i>=e.length&&(i=0),i<0&&(i=e.length-1),e[i].classList.add("transparency-item-active"))})),r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".close")&&(r.style="",a.forEach((e=>{e.classList.remove("popup-transparency-slider__slide-active")})))}))})(),(()=>{const e=document.querySelector(".reviews-slider-wrap"),t=document.querySelectorAll(".reviews_slider");let r=0;e.addEventListener("click",(e=>{e.target.matches("#reviews-arrow_right, #reviews-arrow_left, .transparency-item__img, svg, path")&&("reviews_slider-active",t[r].classList.remove("reviews_slider-active"),e.target.matches("#reviews-arrow_right, svg, path")?r++:e.target.matches("#reviews-arrow_left, svg, path")&&r--,r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r].classList.add("reviews_slider-active"))}))})(),e({formId:"feedback1"}),e({formId:"feedback2"}),e({formId:"feedback3"}),e({formId:"feedback4"}),e({formId:"feedback5"}),e({formId:"feedback6"})})();