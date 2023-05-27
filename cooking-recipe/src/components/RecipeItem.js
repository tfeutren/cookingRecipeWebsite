// Composant Recette

import '../styles/RecipeItem.css'
import { recipeList } from '../datas/recipeList'

function renderDifficulty(difficulty) {
  const fireSymbol = '🔥';
  return fireSymbol.repeat(difficulty);
}

function RecipeItem({ name, difficulty, preparationTime, cookTime, picture, category, type, description, ingredients, portions, season, uploadDate, instructions }) {
	return (
	  <div>
		<ul>
		  {recipeList.map(({ name, difficulty, preparationTime, cookTime, picture, category, type, description, ingredients, portions, season, uploadDate, instructions }) => (
			<div className="recipe-item" key={name}>
			  <h2>{name}</h2>
			  <p>Difficulté : {renderDifficulty(difficulty)}</p>
			  <p>Temps de préparation : {preparationTime} min</p>
			  <p>Temps de cuisson : {cookTime} min</p>
			  <a href={picture}>
				<img src={picture} className='lmj-render' />
			  </a>
			</div>
		  ))}
		</ul>
	  </div>
	)
  }
  

export default RecipeItem
