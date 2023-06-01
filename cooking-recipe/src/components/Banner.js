import logo from '../assets/logo2-sans-fond.png'
import '../styles/Banner.css'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Banner({children}) {
    return (
        <div className='banner'>
            
            <p className='link'>
                <nav><ul><li>
                    <Link to="/entrees"><p className='link'>Entrées</p></Link>
                </li></ul></nav>
            </p>
            <p className='link'>
                <nav><ul><li>
                    <Link to="/plats"><p className='link'>Plats</p></Link>
                </li></ul></nav>
            </p>
            <p className='link'>
                <nav><ul><li>
                    <Link to="/desserts"><p className='link'>Desserts</p></Link>
                </li></ul></nav>
            </p>
            <p className='link'>
                <nav><ul><li>
                    <Link to="/frigo"><p className='link'>Frigo</p></Link>
                </li></ul></nav>
            </p>
            <p className='link'>
                <nav><ul><li>
                    <Link to="/aleatoire"><p className='link'>Aléatoire</p></Link>
                </li></ul></nav>
            </p>          
            <p className='link'>
                <nav><ul><li>
                    <Link to="/"><img src={logo} alt='TuCuisine' className='logo' /></Link>
                </li></ul></nav>
            </p>
            {children}

        </div>
    )
}

export default Banner