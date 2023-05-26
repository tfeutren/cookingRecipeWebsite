import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner({children}) {
    const title = 'Tu Cuisine'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='TuCuisine' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
            {children}
        </div>
    )
}

export default Banner