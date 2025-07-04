import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        const exists = cartItems.find(  
            (cartItem) =>
                cartItem.itemNumber === item.itemNumber &&
                cartItem.selectedSize === item.selectedSize
        );

        if (!exists) {
            setCartItems(prev => [...prev, item]);
        }
    };

    const removeFromCart = (itemNumber, selectedSize) => {
        setCartItems(prev => 
            prev.filter(cartItem => 
                !(cartItem.itemNumber === itemNumber && cartItem.selectedSize === selectedSize)
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
