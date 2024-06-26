import { useContext, useState } from 'react'
import './Navbar.css'
import '../Responsive/NavBar_res.css'
import logo from '../assets/OptiLook_favIcon.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import search from '../assets/search.png'
import store from '../assets/location.png'
import accLogo from '../assets/profile.png'
// import wish from '../assets/like.png'
import eye_scan from '../assets/eye-scan.png'
import trackLogo from '../assets/tracking.png'

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const { getTotalCartItems } = useContext(ShopContext);
    const navMenuListClicked = (section) => {
        setMenu(section);
    }
    return (
        <>
            <div className="fst">
                <div className="toll"><span style={{ color: 'blue', fontWeight: 'bold' }}>Need Help ? &nbsp; &nbsp; </span> Call: 1800XXXXXXX
                </div>

                <div className="search">
                    <div className="searchArea">
                        <input type="text" placeholder='Search here' />
                    </div>
                    <div className="searchButton">
                        <img src={search} alt="<?>" />
                    </div>
                </div>

                <div className="store">
                    <div className="storeLogo">
                        <img src={store} alt="" />
                    </div>
                    <div className="storeText">
                        Find Store
                    </div>
                </div>

                <div className="store">
                    <div className="trackLogo">
                        <img src={trackLogo} alt="" />
                    </div>
                    <div className="trackText">
                        <li><Link to='/track'><span style={{ color: 'white' }}>Track Order</span></Link></li>
                    </div>
                </div>


                <div className="account">
                    <div className="accLogo">
                        <img src={accLogo} alt="" />
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Account
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><Link to='/login' className="dropdown-item">Login</Link></li>
                            <li><Link to='/register' className="dropdown-item">Sign up</Link></li>
                            <li><Link to='/' className="dropdown-item">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="snd">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>OptiLook</p>
                </div>
                <ul className="nav-menu">
                    {/* <li id='dropdown' onClick={() => DropDown()}>
                        Eye Wear
                        <div id="drop">
                            <a>a</a>
                            <a>b</a>
                            <a>c</a>
                        </div>
                    </li> */}
                    <li onClick={() => navMenuListClicked("shop")}><Link to='/'><span style={{ color: "Black" }}>Home</span></Link>{menu === "shop" && <hr />}</li>
                    <li onClick={() => navMenuListClicked("mens")}><Link to='/mens'><span style={{ color: "Black" }}>PowerGlass</span></Link>{menu === "mens" && <hr />}</li>
                    <li onClick={() => navMenuListClicked("women")}><Link to='/women'><span style={{ color: "Black" }}>Sunglass</span></Link>{menu === "women" && <hr />}</li>
                    <li onClick={() => navMenuListClicked("kids")}><Link to='/kids'><span style={{ color: "Black" }}>Computer Glass</span></Link>{menu === "kids" && <hr />}</li>
                </ul>
                <div className="test">
                    <Link to='/eyeTest'><img src={eye_scan} width={30} alt="Eye Test" /></Link>
                </div>

                <div className="nav-login-cart">
                    {/* <Link to='/login'><button>Login</button></Link> */}
                    <Link to='/cart'><img src={cart_icon} width={30} alt="cart_icon" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar