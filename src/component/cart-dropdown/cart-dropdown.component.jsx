import './cart-dropdown.styles.scss'
import Button from "../button/button.component"
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()
    const navigationHandler = () => {
      navigate("/checkout")
    }
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {console.log(cartItems)}
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button onClick={navigationHandler}>CHECKOUT</Button>
      </div>
    )
}

export default CartDropDown