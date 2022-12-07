import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Pyszne jedzonko dla Ciebie! </h2>
      <p>
        Wybierz danie z naszego menu i ciesz sie pysznym jedzonkiem, jesteśmy
        wstanie obiecać, że twój brzusio podziękuje Ci szczerym uśmiechem i
        krótką wizytą w łazience hehe
      </p>
      <p>
        Nasze jedzonko jest w przysłowiową pyte, ponieważ mamy kucharzy z
        Rafaello oraz używamy tylko składników najwyższej jakości
      </p>
    </div>
  );
};

export default MealsSummary;
