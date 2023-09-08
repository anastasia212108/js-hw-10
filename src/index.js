import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';


const elements = {
    selectCat: document.querySelector(".breed-select"),
    loaderText: document.querySelector(".loader"),
    errorText: document.querySelector(".error"),
    info: document.querySelector(".cat-info"),
}

fetchBreeds()
    .then(data => { 
        elements.selectCat.innerHTML = createList(data);
        
     })
    .catch(error => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })

function createList(arr) {
    return arr
        .map(({ id, name }) => `<option value="${id}">${name}</option>`)
        .join("");
}
     
elements.selectCat.addEventListener("change", onClickId)
function onClickId(evt) {
    let valueId = evt.currentTarget.value;
    elements.info.innerHTML = "";
 elements.loaderText.style.display = 'block' ;
    fetchCatByBreed(valueId)
        .then(data => {
            elements.info.innerHTML = createMarcup(data);
                 if (data.length === 0) {
             Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
          }
       
        })
       
        .catch(error => { 
                Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            
})
        .finally(() => { 
           elements.loaderText.style.display = 'none' ;
        })

    // console.log(valueId)
}

function createMarcup(arr) {
    return arr.map(({ url, breeds: { 0: { description, name, temperament } } }) =>
        `<img  src="${url}" alt="${name} class="cat-img" width="400"/>
      <div>
        <h1>${name}</h1>
        <h3>${description}</h3>
        <h3>Temperament: ${temperament}</h3>
      </div>`).join("")     
}

//  elements.loaderText.style.display = 'none' ;
//             elements.errorText.style.display = 'none' ;

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