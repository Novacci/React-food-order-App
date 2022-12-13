import React from 'react';
import classes from './Header.module.css';
import meals from '../../meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          showCartHandler={props.showCartHandler}
          order={props.order}
        />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="Table with food" />
      </div>
    </div>
  );
};

export default Header;
