import './Say.css';

/**
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
 */

import './EventPractice.css';

/**
import React, { Component } from 'react';

class EventPractice extends Component {

	render() {
		return <h1> class 이벤트 연습</h1>
	};
}
 */

/** */
import React, { useState } from 'react';
const EventPractice = () => {
	const [name, setName] = useState('');

	return (
		<div>
			<h1>이벤트 연습</h1>
			<h1>{name}</h1>
			<button
				onClick={()=>{
					setName('윤진')
				}}
			>이름 출력</button>
		</div>
	);
};

export default EventPractice;
