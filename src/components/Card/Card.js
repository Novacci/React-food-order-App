import classes from './Card.module.css';
import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className={classes.card}>{props.children}</div>
    </div>
  );
};

export default Card;
