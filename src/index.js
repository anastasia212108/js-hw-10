console.log("gdg91")

import SlimSelect from 'slim-select';
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_sTSvnapzqolgxvituXzzgrW1oJCeZaGpwl2qUFWTWxXnhTi5fesvG94qe1FAdv4j";
import { fetchBreeds } from './cat-api';

const elements = {
    selectCat: document.querySelector(".breed-select"),
    loaderText: document.querySelector(".loader"),
    errorText: document.querySelector(".error"),
}
elements.selectCat.addEventListener("click", fetchBreeds)
// fetchBreeds("beng")


// function createMarcup(arr) {
//     return  arr.map(() => `<img  src="" alt="" />
//       <div>
//         <h1></h1>
//         <h2></h2>
//       </div>`).join("")     
// }



//     new SlimSelect({
//     select: '.breed-select'
// });

// function serviceCat() {}

// selection.addEventListener()


// fetchBreeds()
// яка виконує HTTP - запит і повертає проміс із масивом порід - результатом запиту.
// Винеси її у файл cat - api.js та зроби іменований експорт.

// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

//  fetchCatByBreed(breedId)
//  очікує ідентифікатор породи, робить HTTP - запит і повертає проміс із даними про
// кота - результатом запиту.Винеси її у файл cat - api.js і зроби іменований експорт.

// Поки відбувається будь - який HTTP - запит, необхідно показувати завантажувач -
//     елемент p.loader

// помилка під час HTTP - запиту, тобто проміс було відхилено,
//     відобразити елемент p.error, а при кожному наступному запиті приховувати його.
//     Використовуй для цього додаткові CSS класи.