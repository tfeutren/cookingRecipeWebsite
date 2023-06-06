import '../styles/RecipeItem.css';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';


function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function RecipeItem({ name, category, difficulty, totalTimeMax, season }) {
  let filteredRecipes = recipeList;

  if (name || category || difficulty || totalTimeMax || season) {
    filteredRecipes = recipeList.filter(
      (recipe) =>
        (!name || recipe.name.toLowerCase().includes(name)) &&
        (!category || recipe.category === category) &&
        (!difficulty || recipe.difficulty <= difficulty) &&
        (!totalTimeMax || totalTimeMax >= recipe.preparationTime + recipe.cookTime) &&
        (!season || recipe.season.includes(season))
    );
  }

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <h1 className='error'>Pas de recette correspondante !</h1>
      ) : (
        <ul>
          {filteredRecipes.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
            <Link to={`/recipe/${name}`} key={name} className="recipe-item">
              <div>
                <h2>{name}</h2>
                <p>Difficulté : {renderDifficulty(difficulty)}</p>
                <p>Temps Total : {preparationTime + cookTime} min</p>
                <img src={picture} className="render" alt={name} />
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeItem;