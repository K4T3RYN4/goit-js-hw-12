import{a as L,S as w,i as b}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function d(a,e){try{const o=await L.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:a,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return{hits:o.data.hits,totalHits:o.data.totalHits}}catch(o){throw console.error("API error:",o.message),o}}let S=new w(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});const h=document.querySelector("#loader"),f=document.querySelector(".gallery"),c=document.querySelector("#loadBtn");function y(a,e){f.insertAdjacentHTML(e,$(a)),S.refresh()}function q(){f.innerHTML=""}function g(){h.classList.remove("visually-hidden")}function m(){h.classList.add("visually-hidden")}function B(){c.classList.remove("visually-hidden")}function u(){c.classList.add("visually-hidden")}function $(a){return a.map(({largeImageURL:e,webformatURL:o,tags:s,likes:t,views:r,comments:i,downloads:v})=>`
    <li class="gall-item">
        <a class="gall-pic" href="${e}">
            <img
                width="360"
                height="200"
                class="gallery-image"
                src="${o}"
                alt="${s}"
            />
        </a>
        <ul class="gall-descr">
            <li class="gall-descr-item">Likes: ${t}</li>
            <li class="gall-descr-item">Views: ${r}</li>
            <li class="gall-descr-item">Comments: ${i}</li>
            <li class="gall-descr-item">Downloads: ${v}</li>
        </ul>
    </li>`).join(`
`)}function l(a){b.error({position:"topRight",message:a})}const n=document.querySelector("#searchInput"),H=document.querySelector("#searchBtn");let p=1;H.addEventListener("click",async a=>{if(a.preventDefault(),!n.value.trim())return l("Please enter a search query!");q(),g();try{const{hits:e,totalHits:o}=await d(n.value,p);if(!e||e.length===0)return u(),l("Sorry, there are no images matching your search query. Please try again!");if(y(e,"afterbegin"),e.length<=o)B();else return u(),l("We are sorry but you have reached the end of search results.")}catch(e){console.log(e.message)}finally{m()}});c.addEventListener("click",async a=>{a.preventDefault(),g();try{const{hits:e,totalHits:o}=await d(n.value,p+=1);y(e,"beforeend");const s=gallery.querySelector(".gall-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(e){console.log(e.message)}finally{m()}});
//# sourceMappingURL=index.js.map
