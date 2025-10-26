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
} from './js/render-functions.js';

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")

let page = 1

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    if (!searchInput.value.trim()) {
        return showError('Please enter a search query!')
    }

    clearGallery()
    showLoader()

    try {
        const { hits, totalHits } = await getImagesByQuery(searchInput.value, page)

        if (!hits || hits.length === 0) {
            hideLoadMoreButton()
            return showError('Sorry, there are no images matching your search query. Please try again!')
        };
        createGallery(hits, 'afterbegin')

        if (hits.length <= totalHits) {
            showLoadMoreButton()
        } else {
            hideLoadMoreButton()
            return showError('We are sorry but you have reached the end of search results.')
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
        const { hits, totalHits } = await getImagesByQuery(searchInput.value, page += 1)

        createGallery(hits, 'beforeend')

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