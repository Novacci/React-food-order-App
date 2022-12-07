import React from 'react';
import classes from './Header.module.css';
import meals from '../../meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="Table with food" />
      </div>
    </div>
  );
};

export default Header;