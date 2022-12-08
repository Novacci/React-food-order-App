import React from 'react';
import MealItemForm from '../Form/MealItemForm';
import classes from './MealItem.module.css';
import listClasses from './ListStyle.module.css';

const MealItem = (props) => {
  return (
    <li className={listClasses.li}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} orderHandler={props.orderHandler} />
      </div>
    </li>
  );
};

export default MealItem;
