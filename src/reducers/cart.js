export const initialState = []

export const CAR_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CAR_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload

      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        return newCart
      }

      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case CAR_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter((item) => item.id !== id)
    }
    case CAR_ACTIONS.CLEAR_CART: {
      return initialState
    }
  }

  return state
}