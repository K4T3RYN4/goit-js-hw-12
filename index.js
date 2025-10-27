import{a as q,S as H,i as g}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function m(r,e){try{const o=await q.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:r,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return{hits:o.data.hits,totalHits:o.data.totalHits}}catch(o){throw console.error("API error:",o.message),o}}let B=new H(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});const p=document.querySelector("#loader"),d=document.querySelector(".gallery"),f=document.querySelector("#loadBtn");function L(r){d.insertAdjacentHTML("beforeend",O(r)),B.refresh()}function M(){d.innerHTML=""}function v(){p.classList.remove("visually-hidden")}function w(){p.classList.add("visually-hidden")}function b(){f.classList.remove("visually-hidden")}function n(){f.classList.add("visually-hidden")}function O(r){return r.map(({largeImageURL:e,webformatURL:o,tags:a,likes:t,views:s,comments:i,downloads:S})=>`
    <li class="gall-item">
        <a class="gall-pic" href="${e}">
            <img
                width="360"
                height="200"
                class="gallery-image"
                src="${o}"
                alt="${a}"
            />
        </a>
        <ul class="gall-descr">
            <li class="gall-descr-item">Likes: ${t}</li>
            <li class="gall-descr-item">Views: ${s}</li>
            <li class="gall-descr-item">Comments: ${i}</li>
            <li class="gall-descr-item">Downloads: ${S}</li>
        </ul>
    </li>`).join(`
`)}function h(r){g.error({position:"topRight",message:r})}function P(r){g.info({position:"topRight",message:r})}const $=document.querySelector("#searchInput"),C=document.querySelector("#form");let u=1,c="",l=0,y=0;C.addEventListener("submit",async r=>{if(r.preventDefault(),c=$.value.trim(),!c)return h("Please enter a search query!");u=1,l=0,M(),n(),v();try{const{hits:e,totalHits:o}=await m(c,u);if(y=o,!e||e.length===0)return n(),h("Sorry, there are no images matching your search query. Please try again!");L(e),l=e.length,l<y?b():n()}catch(e){console.log(e.message)}finally{w()}});f.addEventListener("click",async r=>{r.preventDefault(),v();try{u+=1;const{hits:e,totalHits:o}=await m(c,u);l+=e.length,L(e),l<o?b():(n(),P("We are sorry, but you have reached the end of search results."));const a=d.querySelector(".gall-item");if(a){const t=a.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(e){console.log(e.message)}finally{w()}});
//# sourceMappingURL=index.js.map
