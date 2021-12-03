import React, {createContext, useState, useContext} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({hola:'mundo'});
    
    /*     Métodos recomendados: 
    addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
    removeItem(itemId) // Remover un item del cart por usando su id
    clear() // Remover todos los items
    isInCart: (id) => true|false */

    return (
        <CartContext.Provider value={ {cart, setCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext