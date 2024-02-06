import './EventPractice.css';

/**
import React, { Component } from 'react';

class EventPractice extends Component {

	render() {
		return <h1> class 이벤트 연습</h1>
	};
}
 */

/** 
import React, { useState } from 'react';
const EventPractice = () => {
	const [name, setName] = useState('');

	return (
		<div>
			<h1>이벤트 연습</h1>
			<h1>{name}</h1>
			<button
				onClick={() => {
					setName('윤진');
				}}
			>
				이름 출력
			</button>
		</div>
	);
};
*/

/**
import React, { Component } from 'react';
// 클래스 컴포넌트 : onChange 이벤트 핸들링하기
class EventPractice extends Component {
	// render() 함수를 사용해 화면에 표시한다.

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="임의의 값을 입력해 보세요."
					onChange={(e) => {
						console.log(e.target.value);
					}}
				></input>
			</div>
		);
	}
}
 */

/**
import React, { Component } from 'react';

class EventPractice extends Component {

	state = {
		message : '',
	}
	
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="임의의 값을 입력해 보세요"
					value={this.state.message}
					onChange={(e) => {
						this.setState({
							message: e.target.value,
						});
					}}
				/>
				<button
					onClick={() => {
						alert(this.state.message);
						this.setState({
							message: '',
						});
					}}
				>
					확인
				</button>
			</div>
		);
	}
}
 */

// 메서드 만들기
/*
import React, { Component } from 'react';
class EventPractice extends Component {
	state = {
		message: '',
	};

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			message: e.target.value,
		});
	}

	handleClick() {
		alert(this.state.message);
		this.setState({
			message: '',
		});
	}
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="임의 값을 입력해 보세요."
					value={this.state.message}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}
*/

/**
import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		message : ''
	}

	handleChange =(e) => {
		this.setState({
			message : e.target.value
		});
	}

	handleClick = () => {
		alert(this.state.message);
		this.setState({
			message : ''
		});
	}

	render() {
		return (
		<div>
			<h1>이벤트 연습</h1>
			<input
			 type="text"
			 name="message"
			 placeholder="임의 값을 입력해 보세요"
			 value={this.state.message}
			 onChange={this.handleChange}
			/>
			<button onClick={this.handleClick}>확인</button>
		</div>);
	};
}
 */

// input 여러 개 다루기
/**
import React, { Component } from 'react';
class EventPractice extends Component {
	state = {
		username : '',
		message : ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	handleClick = () => {
		alert(this.state.username + ' : ' + this.state.message);
		this.setState({
			username : '',
			message: ''
		});
	}
	render() {
		return(
			<div>
				<h1>이벤트 연습</h1>
				<input
				 type="text"
				 name="username"
				 placeholder="사용자명"
				 value={this.state.username}
				 onChange={this.handleChange}
				/>
				<input
				 type="text"
				 name="message"
				 placeholder="임의의 값을 입력해 보세요"
				 value={this.state.message}
				 onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	};
}
 */

// onKeyUp
/*
import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		username: '',
		message: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ' : ' + this.state.message);
		this.setState({
			username: '',
			message: '',
		});
	};

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="username"
					placeholder="사용자명"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="임의의 값 입력"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyUp={this.handleKey}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}
*/

// 클래스 컴포넌트 예제
/**
import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		userName: '김훈',
	};

	// 화살표 함수(=>) 를 사용하여 메서드 정의
	handleClickHong = () => {
		console.log('handleClickHong');
		this.setState({ userName: '홍길동' });
	};

	handleClickLee = () => {
		console.log('handleClickLee');
		this.setState({ userName: '이희준' });
	};

	render() {
		const { userName } = this.state;
		return (
			<div>
				<h1>Hello{this.state.userName} !</h1>
				<h1>Hello{userName} !</h1>

				<button onClick={this.handleClickHong}>홍길동</button>
				<button onClick={this.handleClickLee}>이희준</button>
			</div>
		);
	}
}
 */

// 함수 컴포넌트 예제
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
export default EventPractice;
