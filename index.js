import{a as b,S,i as q}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function y(a,e){try{const r=await b.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:a,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return{hits:r.data.hits,totalHits:r.data.totalHits}}catch(r){throw console.error("API error:",r.message),r}}let B=new S(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});const g=document.querySelector("#loader"),h=document.querySelector(".gallery"),f=document.querySelector("#loadBtn");function m(a,e){h.insertAdjacentHTML(e,O(a)),B.refresh()}function H(){h.innerHTML=""}function p(){g.classList.remove("visually-hidden")}function L(){g.classList.add("visually-hidden")}function v(){f.classList.remove("visually-hidden")}function n(){f.classList.add("visually-hidden")}function O(a){return a.map(({largeImageURL:e,webformatURL:r,tags:s,likes:t,views:o,comments:i,downloads:w})=>`
    <li class="gall-item">
        <a class="gall-pic" href="${e}">
            <img
                width="360"
                height="200"
                class="gallery-image"
                src="${r}"
                alt="${s}"
            />
        </a>
        <ul class="gall-descr">
            <li class="gall-descr-item">Likes: ${t}</li>
            <li class="gall-descr-item">Views: ${o}</li>
            <li class="gall-descr-item">Comments: ${i}</li>
            <li class="gall-descr-item">Downloads: ${w}</li>
        </ul>
    </li>`).join(`
`)}function u(a){q.error({position:"topRight",message:a})}const P=document.querySelector("#searchInput"),$=document.querySelector("#searchBtn");let d=1,c="",l=0;$.addEventListener("click",async a=>{if(a.preventDefault(),c=P.value.trim(),!c)return u("Please enter a search query!");d=1,l=0,H(),n(),p();try{const{hits:e,totalHits:r}=await y(c,d);if(!e||e.length===0)return n(),u("Sorry, there are no images matching your search query. Please try again!");m(e,"afterbegin"),l=e.length,l<r?v():n()}catch(e){console.log(e.message)}finally{L()}});f.addEventListener("click",async a=>{a.preventDefault(),p();try{const{hits:e,totalHits:r}=await y(c,d+=1);l+=e.length,m(e,"beforeend"),l<r?v():(n(),u("We are sorry, but you have reached the end of search results."));const s=h.querySelector(".gall-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(e){console.log(e.message)}finally{L()}});
//# sourceMappingURL=index.js.map
