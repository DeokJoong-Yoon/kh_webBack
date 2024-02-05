import './Counter.css';
/*
const Counter = ({ number }) => {
	return (
		<div>
			Counter 컴포넌트 실행 <br />
			Counter 컴포넌트의 속성 : {number}
		</div>
	);
};
*/
/**
import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		// state의 초깃값 설정
		this.state = {
			number: 0,
			name: '김철수',
		};
	}
	render() {
		const { number, name } = this.state; // state를 조회할 때는 this.state로 조회합니다.
		let i = 0;
		return (
			<div>
				<h1>{number}</h1>
				<button
					// onColick을 통해 버튼이 클릭되었을 때 호출할 함수르 ㄹ지정합니다.
					onClick={() => {
						// this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
						this.setState({ number: number + 1 });
					}}
				>
					1증가
				</button>

				<h1>{name}</h1>
				<button
					// onColick을 통해 버튼이 클릭되었을 때 호출할 함수르 ㄹ지정합니다.
					onClick={() => {
						// this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
						this.setState({ name : "윤진" });
					}}
				>
					이름변경
				</button>
			</div>
		);
	}
}
 */

/**
import React, { Component } from 'react';
class Counter extends Component {
	/*constructor(props) {
		super(props);
		// state의 초깃값 설정하기
		this.state = {
			number : 0,
			fixedNumber : 0
		};
	}
	state = {
		number: 0,
		fixedNumber: 1,
	};

	render() {
		const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값 : {fixedNumber}</h2>
				<button
					// onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
					onClick={() => {
						// this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
						this.setState({ number: number + 1, fixedNumber: fixedNumber + 2 });
					}}
				>
					1 증가
				</button>
			</div>
		);
	}
}
*/

/**
class Counter extends Component {
	state = {
		number: 0,
		fixedNumber: 0,
	};

	render() {
		const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
		return (
			<div>
				<h2>1씩 증가 : {number}</h2>
				<h2>바뀌지 않는 값 : {fixedNumber}</h2>
				<button
				// onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
				onClick={()=> {
					// this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
					this.setState({ number : number + 1});
					this.setState({ number : number + 1});
				}}
				>
					1증가
				</button>
			</div>
		);
	}
}
 */
/**
import React, { Component } from 'react';
class Counter extends Component {
	state = {
		number: 0,
		fixedNumber: 0,
	};

	render() {
		const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값 : {fixedNumber}</h2>

				<button
					// onClick을 토해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
					// preState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킵니다.
					onClick={() => {
						this.setState((prevState) => {
							return { number: prevState.number + 1 };
						});
						// 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
						// 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
						this.setState((prevState) => ({
							number: prevState.number + 1,
						}));
					}}
				>
					증가
				</button>
			</div>
		);
	}
}
 */

import React, { Component } from 'react';

class Counter extends Component {
	state = {
		number: 0,
		fixedNumber: 0,
	};

	render() {
		const { number, fixedNumber } = this.state; //	state를 조회할 때는 this.state로 조회
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값 : {fixedNumber}</h2>

				<button
					onClick={() => {
						this.setState(
							{
								number: number + 1,
							},
							() => {
								console.log('방금 setState가 호출되었습니다.');
								console.log(this.state);
							}
						);
					}}
				>
				1증가
				</button>
			</div>
		);
	}
}
export default Counter;
