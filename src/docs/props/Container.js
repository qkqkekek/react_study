import React from 'react';
import Component from './Component';
import Component2 from './Component2';

const Container = () => {
  const name = "김세환";
  const age = 20;
  const printName = (name) => {
    console.log(name)
  };
  return (
    <div>
      {/* 아래 소스는 component.jsx로 던지는 소스 */}
      <Component name={name} age={age} />
      
           
      <Component2 printName={printName} >
        <span>회원입니다😄</span>
      </Component2>

    </div>
  );
};

export default Container;