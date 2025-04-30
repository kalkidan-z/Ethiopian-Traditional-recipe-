// Sample recipe data
const recipes = [
    {
        id: 1,
        name: "Doro Wat",
        ingredients: ["chicken", "onions", "berbere spice", "garlic", "ginger", "niter kibbeh"],
        description: "Spicy chicken stew, Ethiopia's most famous dish.",
        cookingTime: "2 hours"
    },
    {
        id: 2,
        name: "Injera",
        ingredients: ["teff flour", "water", "salt"],
        description: "Sourdough flatbread with a slightly spongy texture.",
        cookingTime: "2 days (including fermentation)"
    },
    {
        id: 3,
        name: "Misir Wat",
        ingredients: ["red lentils", "onions", "berbere spice", "garlic", "tomato paste"],
        description: "Spicy red lentil stew, a staple vegetarian dish.",
        cookingTime: "45 minutes"
    },
    {
        id: 4,
        name: "Shiro",
        ingredients: ["chickpea flour", "onions", "garlic", "berbere spice", "niter kibbeh"],
        description: "Flavorful chickpea flour stew, popular on fasting days.",
        cookingTime: "30 minutes"
    },
    {
        id: 5,
        name: "Tibs",
        ingredients: ["beef or lamb", "onions", "peppers", "garlic", "rosemary"],
        description: "Sautéed meat dish, often served with injera.",
        cookingTime: "30 minutes"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipeResults = document.getElementById('recipeResults');

// Function to display recipes
// filepath: c:\Users\hp\Desktop\webind\app.js
function displayRecipes(recipeArray) {
    recipeResults.innerHTML = '';
    
    if (recipeArray.length === 0) {
        recipeResults.innerHTML = '<p>No recipes found. Try a different search term.</p>';
        return;
    }
    
    recipeArray.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe-card';
        recipeElement.innerHTML = `
            <div class="recipe-image" style="background-image: url('placeholder.jpg');"></div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span>Cooking Time: ${recipe.cookingTime}</span>
                    <span>Ingredients: ${recipe.ingredients.length}</span>
                </div>
                <a href="#" class="view-recipe">View Recipe</a>
            </div>
        `;
        recipeResults.appendChild(recipeElement);
    });
}

// Function to handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (!searchTerm.trim()) {
        recipeResults.innerHTML = ''; // Clear results if search is empty
        return;
    }
    
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(searchTerm)
        )
    );
    
    displayRecipes(filteredRecipes);
}

// Event listeners
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Clear recipe results when page loads
window.addEventListener('load', () => {
    recipeResults.innerHTML = ''; // Clear the recipe results container
});