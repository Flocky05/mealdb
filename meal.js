const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card rounded-lg overflow-hidden">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body bg-pink-600 p-3">
                    <h5 class="card-title text-white font-medium text-3xl">${meal.strMeal}</h5>
                    <p class="card-text text-white ">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                    <!-- The button to open modal -->
<label for="${meal.strMeal}" class="btn modal-button">open modal</label>

<input type="checkbox" id="${meal.strMeal}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
  <img src="${meal.strMealThumb}" style="width: 100%; height: 20rem; object-fit: cover" class="card-img-top" alt="...">
  <div class="card-body bg-pink-600 text-white ">
    <h5 class="card-title text-3xl">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
    <button class="rounded-md border-stone-100 " style="width: 100%>Go somewhere</button>
  </div>
    <div class="modal-action">
      <label for="${meal.strMeal}" class="btn">DONE</label>
    </div>
  </div>
</div>
             </div>
        `;

        mealContainer.appendChild(mealDiv);
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

const loadMealDetail = (idMeal) => {
    // console.log("get Id of meal",idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetalDisply(data.meals[0]));
}

// const mealDetalDisply = meal => {
//     const detailContainer = document.getElementById('detail-container');
//     detailContainer.innerHTML = ``;
//     const mealDiv = document.createElement('div')
//     mealDiv.classList.add('card')
//     mealDiv.innerHTML = `
//     <img src="${meal.strMealThumb}" style="width: 100%; height: 20rem; object-fit: cover" class="card-img-top" alt="...">
//     <div class="card-body bg-pink-600 text-white p-3">
//       <h5 class="card-title text-3xl">${meal.strMeal}</h5>
//       <p class="card-text">${meal.strInstructions}</p>
//       <button class="rounded-md border-stone-100 " style="width: 100%>Go somewhere</button>
//     </div>
//     `;
//     detailContainer.appendChild(mealDiv)
//}

loadMeals('beef');
