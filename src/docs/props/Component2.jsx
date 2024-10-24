import React from 'react';

const Component2 = (props) => {
  console.log(props)
  props.printName("d박d성훈");
  return (
    <div>
      {props.children}
      {/* 앞 파일에 있는 회원입니다 출력됨 */}

      {props.printName}

    </div>
  );
};

export default Component2;