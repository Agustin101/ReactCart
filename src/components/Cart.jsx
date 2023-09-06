import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}
      </div>
      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const { cart, clearCart, addToCart } = useCart()
  const cartCheckBoxId = useId()
  const addItemToCart = (item) => {
    addToCart(item)
  }

  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                addToCart={() => addItemToCart(item)}
              ></CartItem>
            )
          })}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
