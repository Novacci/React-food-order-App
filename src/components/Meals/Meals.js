import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = (props) => {
  return (
    <div>
      <MealsSummary />
      <AvailableMeals orderHandler={props.orderHandler} />
    </div>
  );
};

export default Meals;
