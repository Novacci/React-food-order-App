import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import Meals from './components/Meals/Meals';

function App() {
  const [order, setOrder] = useState(0);

  const orderHandler = (orderAmount) => {
    setOrder((prevOrder) => prevOrder + orderAmount);
  };

  return (
    <div>
      <Header order={order} />
      <main>
        <Meals orderHandler={orderHandler} />
      </main>
    </div>
  );
}

export default App;
