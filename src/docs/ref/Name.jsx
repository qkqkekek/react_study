import React, { useState, useRef } from 'react';

const Name = () => {
  // 사용자가 입력한 이름을 p태그에 실시간으로 작성
  // 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
  // 입력 후 엔터를 누르면 p태그에 반영

  const [result, setResult] = useState();
  const inputRef = useRef();
  const onChangeToInput = (e) => {
  console.log(e.target.value)
  setResult(e.target.value);
  }

  const onClickToNim = () => {
    setResult(inputRef.current.value.replaceAll("님","") + "님"); // 님버튼 연타 방지로 replaceAll 추가
    console.log(inputRef.current.value)
  }


  // onKeyDown={(e) => { console.log(e)}}


  return (
    <div>
      <p>{result}</p>
      <input ref={inputRef} value={result} type='text' onChange={onChangeToInput} onKeyDown={(e) => { console.log(e)}} />
      <button onClick={onClickToNim}>님 추가</button>
    </div>
  );
};

export default Name;