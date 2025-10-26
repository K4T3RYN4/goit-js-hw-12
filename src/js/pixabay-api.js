import axios from "axios";

export async function getImagesByQuery(query, page) {
    try {
        const res = await axios.get("https://pixabay.com/api/", {
            params: {
                key: "52839812-b4c86bdfff86c9a3d984b9ce5",
                q: query,
                page: page,
                per_page: 15,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true
            }
        })
        return {
            hits: res.data.hits,
            totalHits: res.data.totalHits
        };
    } catch (err) {
        console.error("API error:", err.message);
        throw err;
    }
}
