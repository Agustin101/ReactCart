import { createContext, useReducer } from 'react'
import { reducer, initialState, CAR_ACTIONS } from '../reducers/cart'

//1 - se crea el contexto, es el que se consume con useContext
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) =>
    dispatch({ type: CAR_ACTIONS.ADD_TO_CART, payload: product })

  const clearCart = () =>
    dispatch({
      type: CAR_ACTIONS.CLEAR_CART
    })

  const removeFromCart = (product) =>
    dispatch({ type: CAR_ACTIONS.REMOVE_FROM_CART, payload: product })

  return { addToCart, clearCart, removeFromCart, state }
}

//2 - se crea el proveedor del contexto, que permite acceso a el mismo
export function CartProvider({ children }) {
  const { state, addToCart, clearCart, removeFromCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
