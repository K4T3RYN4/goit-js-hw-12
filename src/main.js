import { getImagesByQuery } from './js/pixabay-api.js';

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
    showError,
    loadBtn,
    gallery
} from './js/render-functions.js';

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")

let page = 1
let currentQuery = ''
let totalLoaded = 0
let totalHits = 0

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    currentQuery = searchInput.value.trim()

    if (!currentQuery) {
        return showError('Please enter a search query!')
    }

    page = 1
    totalLoaded = 0

    clearGallery()
    hideLoadMoreButton()
    showLoader()

    try {
        const { hits, totalHits } = await getImagesByQuery(currentQuery, page)

        if (!hits || hits.length === 0) {
            hideLoadMoreButton()
            return showError('Sorry, there are no images matching your search query. Please try again!')
        };
        createGallery(hits, 'afterbegin')

        totalLoaded = hits.length

        if (totalLoaded < totalHits) {
            showLoadMoreButton()
        } else {
            hideLoadMoreButton()
        }

    } catch (err) {
        console.log(err.message);
    }
    finally {
        hideLoader()
    }
})

loadBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    showLoader()

    try {
        const { hits, totalHits } = await getImagesByQuery(currentQuery, page += 1)

        totalLoaded += hits.length

        createGallery(hits, 'beforeend')

        if (totalLoaded < totalHits) {
            showLoadMoreButton()
        } else {
            hideLoadMoreButton()
            showError('We are sorry, but you have reached the end of search results.')
        }

        const firstCard = gallery.querySelector('.gall-item');
        if (firstCard) {
            const cardHeight = firstCard.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth'
            });
        }

    } catch (err) {
        console.log(err.message);
    }
    finally {
        hideLoader()
    }
})