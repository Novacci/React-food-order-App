import React, { useState } from 'react';
import Input from './Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [input, setInput] = useState(1);

  const inputValue = (event) => {
    if (+event.target.value <= 5) {
      setInput(+event.target.value);
    }
  };

  const addInput = () => {
    props.orderHandler(input);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={SubmitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          onChange: inputValue,
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value: input,
        }}
      />
      <button disabled={input > 5} onClick={addInput}>
        Add +
      </button>
    </form>
  );
};

export default MealItemForm;
