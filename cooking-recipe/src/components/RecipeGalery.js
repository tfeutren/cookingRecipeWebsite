import '../styles/RecipeGalery.css';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';

function RecipeGalery({ recipeFilter }) {
  const filteredRecipes = recipeFilter === undefined ? recipeList : recipeList.filter(recipeFilter);

  return (
    <div>
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
    </div>
  );
}

export default RecipeGalery;
