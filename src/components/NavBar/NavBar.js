import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="has-background-primary">           

            <img className='logo_img' src={logo} alt="logo" />             

            <h3 className="logo_text">Eco-Moda</h3>

            <div>
                <button className="btn button m-2 is-large is-responsive is-dark is-outlined is-rounded">Hombres</button>
                <button className="btn button m-2 is-large is-responsive is-dark is-outlined is-rounded">Mujeres</button>
                <button className="btn button m-2 is-large is-responsive is-dark is-outlined is-rounded">Niños</button>
            </div>

            <CartWidget/>
        </nav>
    )
}
 export default NavBar;