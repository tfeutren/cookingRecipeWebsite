import '../styles/RecipeItem.css';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';


function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function RecipeItem({ category, difficulty, totalTimeMax, type, season }) {
  let filteredRecipes = recipeList;

  if (category || difficulty || totalTimeMax || type || season) {
    filteredRecipes = recipeList.filter(
      (recipe) =>
        (!category || recipe.category === category) &&
        (!difficulty || recipe.difficulty === difficulty) &&
        (!totalTimeMax || totalTimeMax >= recipe.preparationTime + recipe.cookTime) &&
        (!type || recipe.type === type) &&
        (!season || recipe.season.includes(season))
    );
  }

  return (
    <div>
      <ul>
        {filteredRecipes.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
          <div className="recipe-item" key={name}>
              <h2>{name}</h2>
              <p>Difficulté : {renderDifficulty(difficulty)}</p>
              <p>Temps Total : {preparationTime + cookTime} min</p>
			<Link to={`/recipe/${name}`}>  
              <img src={picture} className="render" alt={name} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RecipeItem;
