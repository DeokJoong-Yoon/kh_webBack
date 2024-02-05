import './Say.css';

/**
import React, { useState } from 'react';

const Say = () => {
	//	현재상태, 상태를 바꾸어 주는 함수
	// message는 상태정보를 저장. setMessage는 setter
	const [message, setMessage] = useState('');
	return (
		<div>
			<button
				onClick={() => {
					setMessage('안녕하세요 ~~!');
				}}
			>
				입장
			</button>
			<button
				onClick={() => {
					setMessage('안녕히 가세요~~!');
				}}
			>
				퇴장
			</button>
			<h3>{message}</h3>
		</div>
	);
};
 */

/**
import React, { useState } from 'react';

const Say = () => {
	// 현재 상태, 상태를 바꾸어 주는 함수
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('안녕하세요~~!!');
	const onClickLeave = () => setMessage('안녕히 가세요');

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h3>{message}</h3>
		</div>
	);
};
 */

/*
import React, { useState } from 'react';

const Say = () => {
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('안녕하세요~~!!');
	const onClickLeave = () => setMessage('안녕히 가세요');

	const [color, setColor] = useState('black');
	// const onClickRed = () => setColor('red');
	// const onClickGreen = () => setColor('green');
	// const onClickBlue = () => setColor('blue');

	const [backgroundColor, setBackgroundColor] = useState('white');
	const [fontSize, setFontSize] = useState();
	return (
		<div style={{ backgroundColor }}>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h3 style={{ color, backgroundColor, fontSize }}>{message}</h3>

			<button
				className="red"
				//  onClick={onClickRed}
				onClick={() => {
					setColor('red');
					setBackgroundColor('aqua');
					setFontSize('48px');
				}}
			>
				빨간색
			</button>
			<button
				className="green"
				// onClick={onClickGreen}
				onClick={() => {
					setColor('green');
					setBackgroundColor('yellow');
					setFontSize('20px');
				}}
			>
				초록색
			</button>
			<button
				className="blue"
				// onClick={onClickBlue}
				onClick={() => {
					setColor('blue');
					setBackgroundColor('#B1CCF0');
					setFontSize('50px');
				}}
			>
				파란색
			</button>
		</div>
	);
};
*/

/**
import React, {useState} from 'react';

const Say = () => {
	const [name, setName] = useState('');
	const onClickEnter = () => setName('React');

	const [color, setColor] = useState('black');
	const [backgroundColor, setBackgroundColor] = useState('white');
	const [fontSize, setFontSize] = useState();

	return(
		<div>
			<button onClick={onClickEnter}>현재 과목은?</button>

			<h1 style={{color, backgroundColor, fontSize}} >{name}</h1>

			<button
				style={{ color : 'red'}}
				onClick={() => {
					setColor('red');
					setBackgroundColor('yellow');
					setFontSize('48px');
				}}
			>
				빨간색(배경색: 노란색, 글자크기: 48px)
			</button><br />
			<button
				style={{ color: 'green'}}
				onClick={()=> {
					setColor('green');
					setBackgroundColor('white');
					setFontSize('25px');
				}}
			>
				초록색(배경색: 흰색, 글자크기: 25px)
			</button><br />
			<button
				style={{color:'blue'}}
				onClick={()=> {
					setColor('blue');
					setBackgroundColor('pink');
					setFontSize('50px');
				}}
			>
				파란색(배경색: 분홍, 글자크기: 50px)
			</button>
			
		</div>
	);
};
 */

import React, { useState } from 'react';

const Say = () => {
	const [userName, setUserName] = useState('김철수');
	const [backgroundColor, setBackgroundColor] = useState('while');

	return (
		<div style={{ backgroundColor }}>
			<h1>Hello {userName}!!</h1>
			<button
				onClick={() => {
					setUserName('홍길동');
					setBackgroundColor('pink');
				}}
			>
				이름변경(홍길동)
			</button>
			<button
				onClick={() => {
					setUserName('이영희');
					setBackgroundColor('aqua');
				}}
			>
				이름변경(이영희)
			</button>
		</div>
	);
};

export default Say;
