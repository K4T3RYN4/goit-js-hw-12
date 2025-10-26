import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions.js';

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (!searchInput.value.trim()) {
        return iziToast.error({
            position: 'topRight',
            message: 'Sorry, you have to write something in order to find something! :) Please try again!',
        });
    }

    clearGallery()

    showLoader()

    getImagesByQuery(searchInput.value)
        .then(hits => {
            if (!hits || hits.length === 0) {
                return iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            };
            createGallery(hits)
        })
        .catch(err => {
            console.log(err.message);
        })
        .finally(() => {
            hideLoader()
        })
})