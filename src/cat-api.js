
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_sTSvnapzqolgxvituXzzgrW1oJCeZaGpwl2qUFWTWxXnhTi5fesvG94qe1FAdv4j";
// const BASE_URL = "https://api.thecatapi.com/v1";
// const END_POINT_LIST = "/breeds";
// const END_POINT_ID = "/imagen/search";
// const API_KEY = "live_sTSvnapzqolgxvituXzzgrW1oJCeZaGpwl2qUFWTWxXnhTi5fesvG94qe1FAdv4j";
function fetchBreeds() {
    return axios
        .get("https://api.thecatapi.com/v1/breeds")
        .then(resp => { return resp.data; })
        .catch(err => console.log("Error", err.message));
    }

function fetchCatByBreed(breedId) {
    return axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(resp => { return resp.data; })
        .catch(err => console.log("Error", err.message));
    }
export { fetchBreeds, fetchCatByBreed }
// fetchBreeds("beng")

  
    // const params = new URLSearchParams({
    //    breed_ids: id
    // })