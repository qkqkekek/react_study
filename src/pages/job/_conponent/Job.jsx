import React from 'react';
import { useSearchParams } from 'react-router-dom';

// 직업의 기술을 보여주는 페이지
const Job = () => {

  // url 파라미터, 쿼리스트링 2가지 방법
  const [searchParams] = useSearchParams();
  const title =  searchParams.get("title");

 // redux에 있는 값을 가져와서 각각에 요청된 페이지에 맞는 기술들을 화면에 출력
  
  return (
    <div>
        <table>
            <thead>
               <tr>
                  <th>기술</th>
               </tr>
            </thead>
            <tbody>
              <tr>
                <td>{title}</td>
              </tr>
            </tbody>
        </table>
    </div>
  );
};

export default Job;