import{a as H,S as O,i as p}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function w(r,e){try{const o=await H.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:r,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return{hits:o.data.hits,totalHits:o.data.totalHits}}catch(o){throw console.error("API error:",o.message),o}}let B=new O(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});const L=document.querySelector("#loader"),f=document.querySelector(".gallery"),g=document.querySelector("#loadBtn");function v(r){f.insertAdjacentHTML("beforeend",P(r)),B.refresh()}function M(){f.innerHTML=""}function S(){L.classList.remove("visually-hidden")}function d(){L.classList.add("visually-hidden")}function b(){g.classList.remove("visually-hidden")}function l(){g.classList.add("visually-hidden")}function P(r){return r.map(({largeImageURL:e,webformatURL:o,tags:a,likes:t,views:s,comments:i,downloads:q})=>`
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
            <li class="gall-descr-item">Downloads: ${q}</li>
        </ul>
    </li>`).join(`
`)}function y(r){p.error({position:"topRight",message:r})}function h(r){p.info({position:"topRight",message:r})}const $=document.querySelector("#searchInput"),C=document.querySelector("#form");let u=1,c="",n=0,m=0;C.addEventListener("submit",async r=>{if(r.preventDefault(),c=$.value.trim(),!c)return y("Please enter a search query!");u=1,n=0,M(),l(),S();try{const{hits:e,totalHits:o}=await w(c,u);if(m=o,!e||e.length===0)return d(),l(),y("Sorry, there are no images matching your search query. Please try again!");v(e),n=e.length,n<m?b():l()}catch(e){console.log(e.message),h("Ooops! Something went wrong... :(")}finally{d()}});g.addEventListener("click",async r=>{r.preventDefault(),l(),S();try{u+=1;const{hits:e,totalHits:o}=await w(c,u);n+=e.length,v(e),n<o?b():(l(),h("We are sorry, but you have reached the end of search results."));const a=f.querySelector(".gall-item");if(a){const t=a.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(e){console.log(e.message),h("Ooops! Something went wrong... :(")}finally{d()}});
//# sourceMappingURL=index.js.map
