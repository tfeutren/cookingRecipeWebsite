import logo from '../assets/logo2-sans-fond.png'
import '../styles/Banner.css'
import { recipeList } from '../datas/recipeList';
import { Link } from 'react-router-dom';

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipeList.length);
    return recipeList[randomIndex];
  }

function Banner({ children }) {
    const recipe = getRandomRecipe();

    const randomRecipeReload = (event) => {
        recipe = getRandomRecipe();
    };

    return (
        <div className='banner'>
            <Link to="/entrees" className='link'>Entrées</Link>
            <Link to="/plats" className='link'>Plats</Link>
            <Link to="/desserts" className='link'>Desserts</Link>
            <Link to="/frigo" className='link'>Frigo</Link>
            <Link to={`/recette/${recipe.name}`} className='link' onClick={randomRecipeReload}>Aléatoire</Link>
            <Link to="/formulaire" className='link'>Ajouter une recette</Link>
            <Link to="/"><img src={logo} alt='TuCuisines' className='logo' /></Link>
            {children}
        </div>
    )
}

export default Banner