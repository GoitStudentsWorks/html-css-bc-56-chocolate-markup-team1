(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();new Swiper(".mySwiper",{breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},loop:!0,loopedSlides:4,loopFillGroupWithBlank:!0,autoplay:{delay:1400,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.forEach(l=>{l.addEventListener("click",t)}),o.openModalBtn&&o.closeModalBtn&&o.modal&&o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o={openModalreviewBtn:document.querySelector("[data-modalreview-open]"),closeModalreviewBtn:document.querySelector("[data-modalreview-close]"),modalreview:document.querySelector("[data-modalreview]")};o.openModalreviewBtn.addEventListener("click",t),o.closeModalreviewBtn.addEventListener("click",t);function t(){o.modalreview.classList.toggle("review-modal-is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const o={openModalBtn:document.querySelector("[data-new-chocolate-modal-open]"),closeModalBtn:document.querySelector("[data-new-chocolate-modal-close]"),modal:document.querySelector("[data-new-chocolate-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();$(document).ready(function(){$(".chocolate-is-loved-slider").slick({arrows:!1,dots:!0,slidesToShow:3,slidesToScroll:1,speed:1100,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0,responsive:[{breakpoint:320,settings:{slidesToShow:1}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:1200,settings:{slidesToShow:3}}]})});
