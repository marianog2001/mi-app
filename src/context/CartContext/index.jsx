import { createContext, useEffect } from "react";
import { useState } from "react";



export const CartContext = createContext()


// en donde se llame hay que crear una constante que sea igual a useContext(CartContext) y llamara esa const.games


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const totalCart = () => {
        let total = 0
        cart.map((game) => {
            total += game.price
        })
        return total
    }
    
    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (index) => {
        let updatedCart = [...cart]
        updatedCart.splice(index,1)
        setCart(updatedCart)
    }

    return <CartContext.Provider value={{cart, setCart, totalCart, clearCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
}





