import { createContext, useContext, useEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from '../utils.js';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getStorageItem('cart'));
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setStorageItem('cart', cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
    setCartOpen(true);
  };

  const removeItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const increaseAmount = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );

  const decreaseAmount = (id) =>
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0)
    );

  const itemCount = cart.reduce((total, item) => total + item.amount, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
        addToCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
