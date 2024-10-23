import React from 'react';
import Food from './Food';
import Foods from './Foods';

const FoodContainer = () => {

  const foods = [
    { id : 1, name : "라면" },
    { id : 2, name : "피자" },
    { id : 3, name : "쌀국수" },
    { id : 4, name : "치킨" },
    { id : 5, name : "떡볶이23" },
  ]

  const style = {
    listStyle : "none",
  }

  return (
    // FoodContainer.js > Foods.jsx > food 로 넘기는 구조
    <Foods foods={foods} style={style} /> // foods={foods}는 위에 있는 배열값
  );
};

export default FoodContainer;