import { recipeList } from '../datas/recipeList';

function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipeList.length);
  return recipeList[randomIndex];
}

function RandomPage() {
    const recipe = getRandomRecipe();

    return (
      <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.picture} className="render" alt={recipe.name} />
        <p>{recipe.description}</p>
        <p>Difficulté : {renderDifficulty(recipe.difficulty)}</p>
        <p>Temps total : {recipe.preparationTime + recipe.cookTime} min</p>
      </div>
    );
}

export default RandomPage;