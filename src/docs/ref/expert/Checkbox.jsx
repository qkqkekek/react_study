import React, { useState } from 'react';

const Checkbox = () => {

  const [message, setMessage] = useState([]);
  
  const onClickTocheck = (e) => {
    let value = e.target.value;
    if(e.target.checked) {
      setMessage(message.concat(value))  // 기본 예제
      // setMessage([...message, value]) // 스프레드 문법
    } else {
      setMessage(message.filter((m) => m !== value))
    }
  }


  return (
    <div>
      
      <div>
        <span>front-end</span>
        <input type='checkbox' value="front-end" onClick={onClickTocheck} />
      </div>
      <div>
        <span>back-end</span>
        <input type='checkbox' value="back-end" onClick={onClickTocheck} />
      </div>
      <div>
        <span>ai</span>
        <input type='checkbox' value="ai" onClick={onClickTocheck} />
      </div>
      <div>
        <h1>{message.map((m, i) => <p key={i}> {m} </p>)}</h1>
      </div>
     
    </div>
  );
};

export default Checkbox;