import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';

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
      <div className='recipePage'>
        <h1>{recipe.name}</h1>
        <img src={recipe.picture} className="render" alt={recipe.name} />
        <div className='textRecipe'>
          <h2>Informations :</h2>
          <p>Difficulté : {renderDifficulty(recipe.difficulty)}</p>
          <p>Temps de préparation : {recipe.preparationTime} min</p>
          <p>Temps de cuisson : {recipe.cookTime} min</p>
          <h2>Description :</h2>
          <p>{recipe.description}</p>
          <h2>Ingrédients :</h2>
          <p>J'arrive pas à le faire afficher !</p>
          <h2>instructions :</h2>
          <div>
            {recipe.instructions.map((instruction, index) => (<li key={index}>{instruction}</li>))}
          </div>
        </div>
      </div>
    );
}

export default RandomPage;