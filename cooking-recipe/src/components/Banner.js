import logo from '../assets/logo2-sans-fond.png'
import '../styles/Banner.css'
import { Link } from 'react-router-dom';

function Banner({ children }) {
    const randomRecipeReload = (event) => {
        if (window.location.pathname === "/aleatoire") {
          event.preventDefault();
          window.location.reload();
        }
    };

    return (
        <div className='banner'>
            <Link to="/entrees" className='link'>Entrées</Link>
            <Link to="/plats" className='link'>Plats</Link>
            <Link to="/desserts" className='link'>Desserts</Link>
            <Link to="/frigo" className='link'>Frigo</Link>
            <Link to="/aleatoire" className='link' onClick={randomRecipeReload}>Aléatoire</Link>
            <Link to="/Formulaire" className='link'>Ajouter une recette</Link>
            <Link to="/"><img src={logo} alt='TuCuisines' className='logo' /></Link>
            {children}
        </div>
    )
}

export default Banner