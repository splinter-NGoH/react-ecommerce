import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import CartIcon from '../../component/cart-icon/cart-icon.component'
import CartDropDown from '../../component//cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo"></CrwnLogo>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) :
                            (<Link className="nav-link" to='/auth '>
                                Sign In
                            </Link>)
                    }
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropDown/>}
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation