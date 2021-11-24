(()=>{"use strict";(()=>{const e=document.querySelector(".header-contacts__arrow"),t=document.getElementById("scrollPhone"),r=document.querySelector(".header-contacts__arrow"),s=document.querySelector(".menu>.menu__icon"),i=document.querySelector(".popup"),a=document.querySelector(".popup-dialog-menu"),n=document.querySelectorAll('a[href^="#"]');for(let e of n)e.addEventListener("click",(function(t){t.preventDefault();const r=e.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"})}));s.addEventListener("click",(()=>{a.classList.add("showHide-menu")})),i.addEventListener("click",(e=>{(e.target.classList.contains("menu-link")||e.target.classList.contains("close-menu"))&&a.classList.remove("showHide-menu")})),e.addEventListener("click",(()=>{r.classList.toggle("header-accord-arrow-active"),t.classList.toggle("header-accord-active")}))})(),(()=>{const e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".open_popup"),r=document.querySelector(".popup-privacy"),s=document.querySelectorAll(".link-privacy"),i=document.getElementById("formula").querySelectorAll(".formula-item__icon"),a=document.querySelectorAll(".button_wide"),n=document.querySelector(".popup-consultation");a.forEach((e=>{e.addEventListener("click",(()=>{n.style="visibility: inherit;"}))})),i.forEach((e=>{e.addEventListener("mouseover",(()=>{e.classList.add("active-item"),(({timing:e,draw:t,duration:r})=>{let s=performance.now();requestAnimationFrame((function i(a){let n=(a-s)/r;n>1&&(n=1);let l=e(n);t(l),n<1&&requestAnimationFrame(i)}))})({duration:300,timing:e=>1-Math.sin(Math.acos(e)),draw(t){e.firstElementChild.style.opacity=t}})})),e.addEventListener("mouseout",(()=>{e.classList.remove("active-item")}))})),s.forEach((e=>{e.addEventListener("click",(()=>{r.style="visibility: inherit;"}))})),t.forEach((t=>{t.addEventListener("click",(()=>{e.style="visibility: inherit;"}))})),document.body.addEventListener("click",(t=>{t.target.classList.contains("close")&&(e.style="",r.style="",n.style="")}))})(),(()=>{function e(e){if(this.el=this.getElement(e.selector),!this.el)return console.log("Что-то не так с селектором");this.layout=e.layout||"+7 (___) ___-__-__",this.maskreg=this.getRegexp(),this.setListeners()}window.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll("input[name=phone]");Array.prototype.forEach.call(t,(function(t){new e({selector:t,layout:t.dataset.mask})}))})),e.prototype.getRegexp=function(){var e=this.layout.replace(/_/g,"\\d");return(e=(e=(e=e.replace(/\(/g,"\\(")).replace(/\)/g,"\\)")).replace(/\+/g,"\\+")).replace(/\s/g,"\\s")},e.prototype.mask=function(e){var t=e.target,r=this.layout,s=0,i=r.replace(/\D/g,""),a=t.value.replace(/\D/g,"");i.length>=a.length&&(a=i),t.value=r.replace(/./g,(function(e){return/[_\d]/.test(e)&&s<a.length?a.charAt(s++):s>=a.length?"":e})),"blur"==e.type?new RegExp(this.maskreg).test(t.value)||(t.value=""):this.setCursorPosition(t.value.length,t)},e.prototype.setCursorPosition=function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var r=t.createTextRange();r.collapse(!0),r.moveEnd("character",e),r.moveStart("character",e),r.select()}},e.prototype.setListeners=function(){this.el.addEventListener("input",this.mask.bind(this),!1),this.el.addEventListener("focus",this.mask.bind(this),!1),this.el.addEventListener("blur",this.mask.bind(this),!1)},e.prototype.getElement=function(e){if(void 0===e)return!1;if(this.isElement(e))return e;if("string"==typeof e){var t=document.querySelector(e);if(this.isElement(t))return t}return!1},e.prototype.isElement=function(e){return e instanceof Element||e instanceof HTMLDocument}})(),(()=>{const e=document.querySelector("#repair-types"),t=document.querySelectorAll(".repair-types-slider>.slider__type"),r=document.querySelectorAll(".repair-types-nav__item"),s=document.querySelector(".slider-counter-content__current"),i=document.querySelector(".slider-counter-content__total");let a=document.querySelectorAll(".types-repair1>.repair-types-slider__slide"),n=0;const l=(e,t,r)=>{e[t].classList.add(r)},c=(e,t,r)=>{e[t].classList.remove(r)},o=t=>{let r=0;s.innerText=1,i.innerText=t.length,e.addEventListener("click",(e=>{e.preventDefault(),l(t,r,"dnone"),e.target.matches("#repair-types-arrow_right, #svg-right, #path-right, #repair-types-arrow_left, #svg-left, #path-left")&&(e.target.matches("#repair-types-arrow_right, #svg-right, #path-right")?r++:e.target.matches("#repair-types-arrow_left, #svg-left, #path-left")&&r--,r>=t.length&&(r=0),r<0&&(r=t.length-1),c(t,r,"dnone"),s.innerText=r+1)}))};o(a),e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("repair-types-nav__item")&&(l(t,n,"dnone"),c(r,n,"active"),e.target.classList.contains("repair-types-nav__item")&&r.forEach(((t,r)=>{e.target===t&&(n=r)})),"Частичный ремонт"===e.target.outerText?(a=document.querySelectorAll(".types-repair1>.repair-types-slider__slide"),o(a)):"Косметический ремонт"===e.target.outerText?(a=document.querySelectorAll(".types-repair2>.repair-types-slider__slide"),o(a)):"Капитальный ремонт"===e.target.outerText?(a=document.querySelectorAll(".types-repair3>.repair-types-slider__slide"),o(a)):"Евроремонт ремонт"===e.target.outerText?(a=document.querySelectorAll(".types-repair4>.repair-types-slider__slide"),o(a)):"Индивидуальный ремонт"===e.target.outerText&&(a=document.querySelectorAll(".types-repair5>.repair-types-slider__slide"),o(a)),c(t,n,"dnone"),l(r,n,"active"))}))})(),document.querySelectorAll(".title_block").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("msg-active")}))})),(()=>{const e=document.querySelectorAll(".transparency-item"),t=document.querySelector(".transparency-slider-wrap"),r=document.querySelector(".popup-transparency"),s=document.querySelectorAll(".transparency-item__img"),i=document.querySelectorAll(".popup-transparency-slider__slide");let a=0;t.addEventListener("click",(t=>{t.target.matches(".slider-arrow_right, .slider-arrow_left, .transparency-item__img, svg, path")&&(t.target.matches(".transparency-item__img")&&(r.style="visibility: visible;",t.target===s[0]&&i[0].classList.add("popup-transparency-slider__slide-active"),t.target===s[1]&&i[1].classList.add("popup-transparency-slider__slide-active"),t.target===s[2]&&i[2].classList.add("popup-transparency-slider__slide-active")),"transparency-item-active",e[a].classList.remove("transparency-item-active"),t.target.matches(".slider-arrow_right, svg, path")?a++:t.target.matches(".slider-arrow_left, svg, path")&&a--,a>=e.length&&(a=0),a<0&&(a=e.length-1),e[a].classList.add("transparency-item-active"))})),r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".close")&&(r.style="",i.forEach((e=>{e.classList.remove("popup-transparency-slider__slide-active")})))}))})(),(()=>{const e=document.querySelector(".reviews-slider-wrap"),t=document.querySelectorAll(".reviews_slider");let r=0;e.addEventListener("click",(e=>{e.target.matches("#reviews-arrow_right, #reviews-arrow_left, .transparency-item__img, svg, path")&&("reviews_slider-active",t[r].classList.remove("reviews_slider-active"),e.target.matches("#reviews-arrow_right, svg, path")?r++:e.target.matches("#reviews-arrow_left, svg, path")&&r--,r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r].classList.add("reviews_slider-active"))}))})()})();