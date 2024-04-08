import { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const [menu, setMenu] = useState("");
    const { getTotalCartItems } = useContext(ShopContext);
    const navMenuListClicked = (section) => {
        setMenu(section);
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => navMenuListClicked("shop")}><Link to='/'>Shop</Link>{menu === "shop" && <hr />}</li>
                <li onClick={() => navMenuListClicked("mens")}><Link to='/mens'>Men</Link>{menu === "mens" && <hr />}</li>
                <li onClick={() => navMenuListClicked("women")}><Link to='/women'>Women</Link>{menu === "women" && <hr />}</li>
                <li onClick={() => navMenuListClicked("kids")}><Link to='/kids'>Kids</Link>{menu === "kids" && <hr />}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar