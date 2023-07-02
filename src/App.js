import React, {useState} from 'react'
import './App.css';
export default App;

function App(){
  let[글제목, 글제목변경함수]=useState(['토이스토리 프로젝트 시작', '토이스토리 프로젝트란', '프로젝트 일정']);
  let[따봉, 따봉변경함수]=useState(0);
  let posts='강남 고기맛집'
  function 제목변경함수(){
    let newArray=[...글제목];
    newArray[0]=newArray[1];
    글제목변경함수(newArray);
  }
  //스테이트 내부 내용은 절대로 변경금지
  //spread 이용해서 복사해서 그거를 변경하는게 훨씬 안정적
  //spread=...
return(
  <div className='App'>
    <div className='black-nav'>
      <div>개발 블로그</div>
    </div>
    <button onClick={제목변경함수}>누르면 제목바뀜</button>
    <div className='List'>
      <h3> {글제목[0]}<span onClick={()=>따봉변경함수(따봉+1)}>good</span> {따봉} </h3>
      <p>7월 2일 시작</p>
    </div>
    <div className='List'>
      <h3> {글제목[1]}</h3>
      <p>이번에 처음으로 진행하는 개인 프로젝트</p>
    </div>
    <div className='List'>
      <h3> {글제목[2]}</h3>
      <p>약 1달간(틈틈히)</p>
    </div>
    <Modal/>
  </div>
);
}

function Modal(){
  return(
    <div className='modal'>
      <h2>모달 제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}
//개인실습. state와 event를 사용하고자 했는데 event 멈추는건 아직 어려움
//return 안에는 하나의 html 태그만 가능. div 1개로만 감싸기 가능
//div 너무많을때 쓰는거: component
//component=남발하지 말고, 자주 바뀌고/형식은 반복되는 html 덩어리들 위주로만.

