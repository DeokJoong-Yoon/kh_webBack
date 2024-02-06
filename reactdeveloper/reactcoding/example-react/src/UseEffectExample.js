import "./UseEffectExample.css";

// 함수 컴포넌트 예제
/**
import React, { useState } from 'react';

const EventPractice = () => {
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');

	const onChangeUserName = (e) => setUsername(e.target.value);
	const onChangeMessage = (e) => setMessage(e.target.value);

	const onClick = () => {
		alert(username + ' : ' + message);
		setUsername('');
		setMessage('');
	};

	const onKeyUp = (e) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
			 type="text"
			 name="username"
			 placeholder="사용자명"
			 value={username}
			 onChange={onChangeUserName}
			/>
			<input
			 type="text"
			 name="message"
			 placeholder="임의 값 입력"
			 value={message}
			 onChange={onChangeMessage}
			 onKeyUp={onKeyUp}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};
 */

/** 
import React, { useState, useEffect } from "react";
const UseEffectExample = () => {
	const [userName, setUserName] = useState("김희진");
	// 마운트될 때와 값이 변결될 때 실행
	useEffect(() => {
		console.log("useEffect");
		console.log("userName : " + userName);
	}, );

	const handleClickHong = () => setUserName("홍길동");
	const handleClickLee = () => setUserName("김철수");
	console.log("App userName : " + userName);

	return (
		<div>
			<h1>Hello {userName}</h1>
			<button onClick={handleClickHong}>홍길동</button>
			<button onClick={handleClickLee}>김철수</button>
		</div>
	);
};

*/

// useEffect Hook : 처음 렌더링될 때만 실행
// 두 번째 파라미터에 비어 있는 배열을 넣어주면 컴포넌트가 화면에 처음 렌더링될 때만 실행하고,
// 업데이트될 때는 실행하지 않는다.
/** 
import React, { useState, useEffect } from "react";
const UseEffectExample = () => {
	const [userName, setUserName] = useState("김희진");
	// 마운트될 때와 값이 변결될 때 실행
	useEffect(() => {
		console.log("useEffect");
		console.log("userName : " + userName);
	}, []);

	const handleClickHong = () => setUserName("홍길동");
	const handleClickLee = () => setUserName("김철수");
	console.log("App userName : " + userName);
	return (
		<div>
			<h1>Hello {userName}</h1>
			<button onClick={handleClickHong}>홍길동</button>
			<button onClick={handleClickLee}>김철수</button>
		</div>
	);
};
*/

//useEffect Hook : 업데이트될 때만 실행
// 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 갓ㅂ을 넣어 주면
// 설정한 값이 업데이트될 때만 실행한다.
/*
import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
	const [userName, setUserName] = useState('김철수');

	useEffect(()=> {
		console.log("useEffect");
		console.log("useName : " + userName);
	},[userName]);

	const handleClickHong = () => setUserName("홍길동");
	const handleClickLee = () => setUserName("최수정");
	return(
		<div>
			<h1>Hello {userName}!</h1>
			<button onClick={handleClickHong}>홍길동</button>
			<button onClick={handleClickLee}>김철수</button>
		</div>
	);
}
*/

// useEffect Hook : clean-up 함수 반환
// useEffect 첫 번째 인자로 전달한 함수에서 clean-up 함수를 반환하면
// 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 반환된 함수를 수행한다.
import React, { useState, useEffect } from "react";
const UseEffectExample = () => {
	const [userName, setUserName] = useState("김미진");

	//컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 반환된  함수를 수행
	useEffect(() => {
		console.log("useEffect");
		console.log("userName : " + userName);
		return () => {
			console.log("--------------------");
			console.log("cleanup");
			console.log("userName : " + userName);
		};
	}, [userName]);

	const handleClickHong = () => setUserName("홍길동");
	const handleClickLee = () => setUserName("이희수");
	return (
		<div>
			<h1>Hello {userName}!</h1>
			<button onClick={handleClickHong}>홍길동</button>
			<button onClick={handleClickLee}>이희수</button>
		</div>
	);
};
export default UseEffectExample;
