// Composant Recette

import '../styles/Recipe.css'
import { recipeList } from '../datas/recipeList'

function RecipeItem({name, difficulty, preparationTime, cookTime, picture, category, type, description, ingredients, portions, season, uploadDate, instructions}) {
	return (
		<div>
			<ul>
				{recipeList.map(({name, difficulty, preparationTime, cookTime, picture, category, type, description, ingredients, portions, season, uploadDate, instructions}) => (
					<li key={name}>
						<h2>{name}</h2>
						<p>Dificulté : {difficulty}</p>
						<p>Temps de préparation :{preparationTime}</p>
						<p>Temps de cuisson :{cookTime}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RecipeItem