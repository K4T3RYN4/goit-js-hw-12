import{a as f,S as m,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function g(o){return f.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{console.log(t.message)})}let h=new m(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});const c=document.querySelector("#loader"),u=document.querySelector(".gallery");function p(o){u.insertAdjacentHTML("afterbegin",S(o)),h.refresh()}function y(){u.innerHTML=""}function v(){c.classList.remove("visually-hidden")}function L(){c.classList.add("visually-hidden")}function S(o){return o.map(({largeImageURL:t,webformatURL:i,tags:s,likes:e,views:r,comments:a,downloads:d})=>`
    <li class="gall-item">
        <a class="gall-pic" href="${t}">
            <img
                width="360"
                height="200"
                class="gallery-image"
                src="${i}"
                alt="${s}"
            />
        </a>
        <ul class="gall-descr">
            <li class="gall-descr-item">Likes: ${e}</li>
            <li class="gall-descr-item">Views: ${r}</li>
            <li class="gall-descr-item">Comments: ${a}</li>
            <li class="gall-descr-item">Downloads: ${d}</li>
        </ul>
    </li>`).join(`
`)}const n=document.querySelector("#searchInput"),b=document.querySelector("#searchBtn");b.addEventListener("click",o=>{if(o.preventDefault(),!n.value.trim())return l.error({position:"topRight",message:"Sorry, you have to write something in order to find something! :) Please try again!"});y(),v(),g(n.value).then(t=>{if(!t||t.length===0)return l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});p(t)}).catch(t=>{console.log(t.message)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
