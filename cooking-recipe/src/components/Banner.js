import logo from '../assets/bzh.png'
import '../styles/Banner.css'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Banner({children}) {
    const title = 'Tu Cuisine'
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
            <h1 className='title'>{title}</h1>
            {children}

        </div>
    )
}

export default Banner