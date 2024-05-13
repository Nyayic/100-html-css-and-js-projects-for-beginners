document.getElementById('getMeal').addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            displayMeal(data.meals[0]);
        })
        .catch(err => {
            console.error('Error fetching the meal:', err);
        });
});

function displayMeal(meal) {
    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = `
        <div class="meal">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="Meal Image">
            <div class="meal-info">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Cuisine:</strong> ${meal.strArea}</p>
                <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            </div>
        </div>
    `;
}
