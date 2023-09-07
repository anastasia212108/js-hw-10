export { fetchBreeds }
const BASE_URL = "https://api.thecatapi.com/v1";
const END_POINT_LIST = "/breeds";
const END_POINT_ID = "/imagen/search";
const API_KEY = "live_sTSvnapzqolgxvituXzzgrW1oJCeZaGpwl2qUFWTWxXnhTi5fesvG94qe1FAdv4j";
function fetchBreeds(evt) {
//    console.dir(evt.currentTarget)
    const valueId = evt.currentTarget.options;
    console.log(valueId);
    return fetch(`${BASE_URL}${END_POINT_LIST}?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
         
            return resp.json();
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    
}
// fetchBreeds("beng")

  
    // const params = new URLSearchParams({
    //    breed_ids: id
    // })