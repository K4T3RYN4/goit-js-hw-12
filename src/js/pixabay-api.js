import axios from "axios";

export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "52839812-b4c86bdfff86c9a3d984b9ce5",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then(res => {
            return res.data.hits
        })
        .catch(err => {
            console.log(err.message)
        })
}
