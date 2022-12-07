import classes from './Card.module.css';
import React from 'react';
import MealItemForm from '../Form/MealItemForm';

const Card = (props) => {
  return (
    <div>
      <div className={classes.card}>{props.children}</div>
    </div>
  );
};

export default Card;
