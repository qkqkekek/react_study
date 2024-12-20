import React, { useState } from 'react';

const Colors = () => {

  // 15분
  // 빨간색 버튼을 누르면 글자색을 빨갛게
  // 파란색 버튼을 누르면 글자색을 파랗게
  // 핑크색을 입력하면 글자 색을 없앤다.

  const [result, setResult] = useState("");
  const [color, setColor] = useState("");
  
  const onClickToColorRed = () => { setColor("red") }
  const onClickToColorBlue = () => { setColor("blue") }
  const onClickToColorPink = () => { setColor("") } // 기본값으로 변경

  const onChangeToInputValue = (e) => { 
    console.log(e.target.value)
    if(e.target.value === "핑크색"){ setColor("") } // 인풋에 핑크색 값이 있을때 기본값으로 변경
    return setResult(e.target.value)
   }
  console.log(color)

  return (
    <div>
      <p style={{color}} >{result}</p>
      <input type="text" onChange={onChangeToInputValue}/>
      
      <button onClick={onClickToColorRed}>빨간색</button>
      <button onClick={onClickToColorBlue}>파란색</button>
      <button onClick={onClickToColorPink}>핑크색</button>
    </div>
  );
};

export default Colors;