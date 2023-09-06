import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const context = useContext(CartContext)

  if(context === undefined){
    throw new Error('useCart tiene que ser utilizado dentro de un cartProvider')
  }

  return context
}