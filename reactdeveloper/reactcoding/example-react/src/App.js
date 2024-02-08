/*import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
// Fragment 사용
import { Fragment } from "react";
function App() {
  const name = "리엑트";
  return (
    <Fragment>
      <h1>{name} 안녕</h1>
      <h2>잘 실행 되는지 확인해 봅시다.</h2>
    </Fragment>
  );
}
*/

/*
function App() {
  return (
    <>
      <h1>리엑트</h1>
    </>
  );
}
*/

/*
function App() {
  const name = "윤진";
  const addr = "서울특별시 송파구";
  const tel = "010-1234-1234";
  const text =
    "감히 이룰 수 없는 꿈을꾸고,감히 이루어질 수 없는 사랑을 하고,\n감히 견딜 수 없는 고통을 견디며,\n감히 용감한 자도 가지 못한 곳을 가며,\n감히 닿지 못할 저 밤하늘의 별에 이른다는 것\n\n이것이 나의 순례이며\n저 별을 따라가는 것이 나의 길이라오\n아무리 희망이 없을 지라도,\n또한 아무리 멀리 있을 지라도......\n\t\t\t\t- Miguel de Cervantes Saavedra -";
  return (
    <>
      <h1>{name}</h1>
      <h2>{addr}</h2>
      <h3>{tel}</h3>
      <p>{text}</p>
    </>
  );
}
*/

/*
// 조건연산자
// == 값만 비교
// === 값과 자료형을 비교
function App() {
  const name = "React";
  return (
    <div>
      <h3>현재 name 값 : {name}</h3>
      {name === "React" ? (
        <h1>리엑트로 설정되어 있습니다.</h1>
      ) : (
        <h1>리엑트로 설정되어 있지 않습니다.</h1>
      )}
    </div>
  );
}
*/

/*
// 조건 연산자 (숫자를 지정하여 홀수와 짝수를 출력)
function App() {
  const number = 3;
  return (
    <div>
      {(number % 2 === 0) ? (
        <h1>짝수</h1>
      ) : (
        <h1>홀수</h1>
      )}
    </div>
  );
}
*/

/*
// 반복되는 요소는 key 속성에 각각의 요소를 구분할 수 있는 값을 지정하지 않으면
// 경고 메시지가 나타난다. 배열의 인덱스를 이용하여 key의 속성값을 지정하였는데
// 인덱스는 주변 상황에 따라 유일한 값이 아닐 수 있다.
function App() {
  const langArray = ["C", "C++", "JAVA", "Python", "Linux"];
  console.log(langArray);
  const langList = langArray.map((lang, index) => (
    <li key={index}><h1>{lang}</h1></li>
  ));
  console.log(langList);

  return <ul>{langList}</ul>
  // return <div>{langArray}</div>
}
*/

/*
function App() {
  const language = ["C", "C++", "JAVA", "Python", "Linux"]; // 구조 분해 할당
  const [c, cpp, j, p, l] = language;
  return (
    <div>
      <ul>
        <li>{c}</li>
        <li>{cpp}</li>
        <li>{j}</li>
        <li>{p}</li>
        <li>{l}</li>
      </ul>
    </div>
  );
}
*/

/*
function App() {
  const hobbyArray = [
    { id: 1, name: "스포츠" },
    { id: 2, name: "음악" },
    { id: 3, name: "영화" },
    { id: 4, name: "독서" },
  ];

  const hobbyList = hobbyArray.map((hobby) => (
    <li key={hobby.id}>{hobby.name}</li>
  ));
  console.log(hobbyList);

  return <ul>{hobbyList}</ul>;
}
*/

/*
function App() {
  const user = {
    userId: "javauser",
    userPwd: "java1234",
    userName: "홍길동",
    userAge: 30,
  };
// for (let key in user) {
//     console.log(`${key} : ${user[key]}`);
// }
  return (
    <div>
      <h1>{user.userId}</h1>
      <h1>{user.userPwd}</h1>
      <h1>{user.userName}</h1>
      <h1>{user.userAge}</h1>
    </div>
  );
}
*/

/*
function App() {
  const name = "리엑트";

  return (
    <div>
      {name === "리엑트" ? <h1>리엑트로 설정되어 있습니다.</h1> : null}
      {name === "리엑트" && <h1>리엑트로 설정됨</h1>}
    </div>
  );
}
// && 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를
// 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문이다.
*/
/*
function App() {
  // 현재 버전에서는 undefined가 명시되어 있을 경우 에러가 아니라 화면에 아무것도 출력되지 않는다.
  // const name = undefined;
  // return name;

  // 만약 name이 undefined일 때 보여주고 싶은 문구가 있따면
  const name = undefined;
  return (
    <div>
      {name || "React"}
    </div>
  )
}
*/

/*
// 인라인 스타일링(1)
function App() {
  const name = "리액트";
  // 스타일 객체 선언
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16  // 단위 생략시 px
  };
  return <div style={style}>{name}</div>
}
*/

/*
// 인라인 스타일링(2)
function App() {
  const name = "yoonJin";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "red",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16, //단위 생략시 px
      }}
    >
      {name}
    </div>
  );
}
*/

/*
// style 속성 대신 className


function App() {
  const name = "React";

  return (
    <div className="react">{name}</div>
  )
}
*/

/*
function App() {
  const name = "YoonJin";
  const code = "01";
  const getnationality = (code) => {
    if (code === "01") {
      return "Korea";
    } else if (code === "02") {
      return "America";
    } else if (code === "03") {
      return "Greece";
    } else {
      return "None";
    }
  };
  return (
    <>
      <div className="react">
        <h1>{name} 회원님</h1>
      </div>
      <div>
        <h1>
          {name} 님의 국적은 {getnationality(code)} 이다.
        </h1>
      </div>
    </>
  );
}
*/

/*
// JSX 외부에서 정의한 함수에서 로컬 변수 직접 사용
function App() {
  const code = "02";
  const name = "Tom";
  const getNationality = () => {
    if (code === '01') {
      return '한국';
    } else if (code === '02') {
      return '미국';
    } else if (code === '03') {
      return '그리스';
    } else {
      return 'None';
    }
  };
  return <h1>{name} 의 국적은 {getNationality()} 이다.</h1>
}
*/

/*
// <input /> 요소를 self-closing 태그라고 부른다.
// 주석 해제 후 * 로 명시된 부분에 /를 작성해 준다.
function App() {
	const name = 'React';
	return (
		<>
			<div
				className="react" // 시작태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
			>
				{name}
			</div>

			{/* 주석문 예시 *}

			<br />
			<label>이름</label>
			<input type="text"></input>
			<br />

			<label>나이</label>
			<input type="text" />
		</>
	);
}
*/

// 리액트를 사용하여 어플리케이션을 만들 때 사용자에 보여지는 화면 요소들을 컴포넌트로 구성한다.
// 컴포넌트를 선언하는 방식에는 함수형 컴포넌트와 클래스형 컴포넌트가 있다.
/*
function App() {
	const userName = '홍길동';
	return (
    <div className="react"
    >
      {userName}
    </div>
  );
}


const App = () => {
  const userName = "홍길동";
  return <div className="react">{userName}</div>;
};
*/

/*
// 클래스 컴포넌트
// 클래스 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야한다.
import React, { Component } from 'react';

class App extends Component {
	render() {
		const name = '리액트';
		return <div className="react"> {name}</div>;
	}
}
*/

/*
import MyComponent from './MyComponent';
const App = () => {
	const myName = "윤진";
  const text = '단순함이란 궁극의 정교함이다.'
	return <MyComponent name={myName} saying={text}></MyComponent>;
};
*/

/**
import MyComponent from './MyComponent';
const App = () => {
	const text = '단순함이란 궁극의 정교함이다.';
	return <MyComponent saying={text} />;
};
 */

/**
import MyComponent from './MyComponent';
const App = () => {
  // return <MyComponent name="홍길동" />;
  // return <MyComponent name="홍길동" address="서울시 강남구" />;
  // return <MyComponent />
  const name = '김희진';
  const children = 'Hello, React';
  return <MyComponent name={name}>{children}</MyComponent>;
}
 */

/**
import MyComponent from './MyComponent';

const App = () => {
	const name = '김희진';
	const age = '25';
	const a = parseInt(age);
	const children = 'Hello, React';
	//return <MyComponent name={name} age={a}>{children}</MyComponent>
	return (
		<MyComponent name={name} favoriteNumber={a}>
			{children}
		</MyComponent>
	);
};
 */

/*
import MyComponent from './MyComponent';

const App = () => {
	const name = '김희진';
	const age = '25';
	const a = parseInt(age);
	const children = 'Hello, React';
	//return <MyComponent name={name} age={a}>{children}</MyComponent>
	return (
		<MyComponent name={name} favoriteNumber={a}>
			{children}
		</MyComponent>
	);
};
*/
/*
import Counter from './Counter';
const App = () => {
	return <Counter></Counter>;
};
*/
/**
import Say from './Say';
const App = () => {
	return <Say></Say>;
};
 */

/*
import EventPractice from './EventPractice';

const App = () => {
  return <EventPractice />
};
*/

/*
import UseEffectExample from './UseEffectExample';

const App = () => {
  return <UseEffectExample/>
};
*/
/**
import StateExample from "./StateExample";
const App = () => {
	return <StateExample />;
};
*/


import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Body />
			<Footer />
		</div>
	);
};
















export default App;



























// export {App};
