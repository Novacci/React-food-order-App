import React from 'react';

import classes from './MealItemForm.module.css';

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <input label="Amount" type="number"></input>
      <button>Add +</button>
    </form>
  );
};

export default MealItemForm;
