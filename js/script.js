document.addEventListener("DOMContentLoaded", function () {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const recipeList = document.getElementById("recipes-list");
    const searchInput = document.getElementById("search");
    const addRecipeButton = document.getElementById("add-recipe-button");
    const recipeModal = document.getElementById("recipe-modal");
    const recipeForm = document.getElementById("recipe-form");
    const closeModal = document.getElementsByClassName("close")[0];
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Cambiar de diapositiva cada 5 segundos

    // Función para filtrar recetas por nombre
    searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue));
    displayRecipes(filteredRecipes);
});

// Función para mostrar las recetas en la página
function displayRecipes(filteredRecipes = []) {
    recipeList.innerHTML = "";
    const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;

    recipesToDisplay.forEach((recipe, index) => {
        const recipeItem = document.createElement("div");
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>Ingredientes: ${recipe.ingredients}</p>
            <p>Instrucciones: ${recipe.instructions}</p>
        `;
        recipeList.appendChild(recipeItem);
    });
}

displayRecipes();


    // Mostrar el formulario modal
    addRecipeButton.addEventListener("click", function () {
        recipeModal.style.display = "block";
    });

    // Cerrar el formulario modal
    closeModal.addEventListener("click", function () {
        recipeModal.style.display = "none";
    });

    // Agregar una nueva receta
    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;

        if (name && ingredients && instructions) {
            recipes.push({ name, ingredients, instructions });
            localStorage.setItem("recipes", JSON.stringify(recipes));
            displayRecipes();
            recipeForm.reset();
            recipeModal.style.display = "none";
        }
    });
});