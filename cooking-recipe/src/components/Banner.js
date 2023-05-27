import logo from '../assets/bzh.png'
import '../styles/Banner.css'

function Banner({children}) {
    const title = 'Tu Cuisine'
    return (
        <div className='lmj-banner'>
            
            <p className='lmj-link'>Entrées</p>
            <p className='lmj-link'>Plats</p>
            <p className='lmj-link'>Desserts</p>
            <p className='lmj-link'>Frigo</p>            
            <p className='lmj-link'>Aléatoire</p>
            <img src={logo} alt='TuCuisine' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
            {children}

        </div>
    )
}

export default Banner