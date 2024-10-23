import React from 'react';
import User from './User';
import Users from './Users';

const UserContainer = () => {
  const userList = [
      {
         id : 1,
         name : '김철수2',
         age : 20,
         address : '경기도 남양주시',
         phone : "010-0000-0000"
      },
      {
         id : 2,
         name : '홍길동1',
         age : 30,
         address : '서울시 강남구',
         phone : "010-0000-0000"
      },
      {
         id : 3,
         name : '장보고3',
         age : 40,
         address : '서울시 용산구',
         phone : "010-0000-0000"
      },
      {
         id : 4,
         name : '김영희',
         age : 20,
         address : '경기도 구리시',
         phone : "010-0000-0000"
      },
   ]


  return (
    <div>
      <Users users={userList} />
    </div>
  );
};

export default UserContainer;