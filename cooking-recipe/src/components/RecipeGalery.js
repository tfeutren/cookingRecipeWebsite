import '../styles/RecipeGalery.css';
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';
import { renderDifficulty } from '../utility';

function RecipeGalery({ recipeFilter }) {
  const filteredRecipes = recipeFilter === undefined ? recipeList : recipeList.filter(recipeFilter);

  return (
    <div>
      <ul>
        {filteredRecipes.length === 0 ? (
          <h1 className='error'>Pas de recette correspondante !</h1>
        ) : filteredRecipes.map(({ name, difficulty, preparationTime, cookTime, picture }) => (
          <Link to={`/recette/${name}`} key={name} className="recipe-item">
            <div>
              <h2>{name}</h2>
              <p>Difficulté : {renderDifficulty(difficulty)}</p>
              <p>Temps Total : {parseInt(preparationTime) + parseInt(cookTime)} min</p>
              <img src={picture} className="picture" alt={name} />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default RecipeGalery;
