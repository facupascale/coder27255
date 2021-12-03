import React, {createContext, useState, useContext} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    function addItem(item) {
        return setCart([...cart, item])
    }
    function removeItem(id) {
        return setCart(cart.filter(prod => prod.item.id !== id))
    }
    function clearCart() {
        return setCart([])
    }
    function isInCart(id) {
        return cart.some(prod => prod.item.id === id)
    }


    /*     Métodos recomendados: 
    addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
    removeItem(itemId) // Remover un item del cart por usando su id
    clear() // Remover todos los items
    isInCart: (id) => true|false */

    return (
        <CartContext.Provider value={ {cart, addItem, removeItem, clearCart, isInCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext