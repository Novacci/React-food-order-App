import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/HeaderCartButton/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [order, setOrder] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const orderHandler = (orderAmount) => {
    setOrder((prevOrder) => prevOrder + orderAmount);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header order={order} showCartHandler={showCartHandler} />
      <main>
        <Meals orderHandler={orderHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
