import create, { SetState, GetState } from 'zustand'
import { StoreState } from './types'

const useStore = create<StoreState>((set: SetState<StoreState>, get: GetState<StoreState>) => ({
  cart: [],
  addCartItem: (product) => {
      const { cart } = get();
      const getProduct = cart.find((f) => f.id === product.id);

      if (getProduct) {
        set({ cart: cart.map((f) => f.id === product.id ? {...f, count: f.count + 1} : {...f}) })
      } else {
        set({ cart: [...cart, product] })
      }
  },
  removeCartItem: (id, hard) => {
    const { cart } = get();
    const getProduct = cart.find((f) => f.id === id);
    
    if (getProduct) {
        if (hard || getProduct.count === 1) {
        set({ cart: cart.filter((f) => f.id !== id) })
    } else {
        set({ cart: cart.map((f) => f.id === id ? { ...f, count: f.count - 1 } : {...f} ) })
    }
    }
  },
  cleanCart: () => {
      set({ cart: [] })
  },
  cartTotalPrice: () => {
      const { cart } = get();
      return cart.reduce((total, product) => total + product.price * product.count, 0)
  },
  cartTotalItems: () => {
      const { cart } = get();
      return cart.reduce((total, product) => total + product.count, 0)
  }
}))

export default useStore;