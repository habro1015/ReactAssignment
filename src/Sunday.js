export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }
  //event는 전달만 하는것, 호출하는 것()이 아님.
  export function ColorSwitch({
    onChangeColor
  }) {
    return (
      <button onClick={e=>{e.stopPropagation();
      onChangeColor();
      }}>
        Change color
      </button>
    );
  }
  //아직 event를 멈추는 방법이 많이 어렵다. e.stop~을 넣는 위치 파악이 어려움
  import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
//아직도 useState가 어려움. 랜더링을 위한?중요한 건 변수쓰지말고 state쓰기
//쓸거면 import React, {useState} from 'React'
import { useState } from 'react';
export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
} //state 이용하기
import { useState } from 'react';
export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
//const message state 설정하기
  if (isSent) {
    return <h1>Thank you!</h1>;
  }//message 정의를 조건문 밖으로 옮기기
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert(`Sending: "${message}"`);
      setIsSent(true);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );}
  //alert(walk ? 'Stop is next' : 'Walk is next'); alert와 async 이용//
  //랜더링 시점과, 스냅샷에 대한 추가 공부 필요
//import { useState } from 'react';는 이제 생략-state 사용할때 위에 달아놓는 것//
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,//스프레드-가져오기//
      score: player.score + 1,
    });
  }
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }
  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }
  return (
    <> 
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
//component 쓰기는 하지만 코드가 반복되는 느낌. 더 줄일 수는 없나?
//찾아보니 redux를 쓰라던데 너무 어려워보임-유튜브 보고 따로 공부하기
//리액트에서 array=map으로 변경하기(spread로 옛날꺼 복사-map으로 재구성. state는 퓨어해야 하기 때문에? 직접 바꾸는건 안됨)
//삭제-spread로 따로 예전거 불러와서 filter로 버릴거 빼서 버리기

  