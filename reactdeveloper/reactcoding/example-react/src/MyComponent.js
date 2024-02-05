import './MyComponent.css';
/*
const MyComponent = () => {
	return (
		<div className="body">
			<div className="quote-container">
				<div className="quote-text">
					감히 이룰 수 없는 꿈을꾸고,
					<br />
					감히 이루어질 수 없는 사랑을 하고,
					<br />
					감히 견딜 수 없는 고통을 견디며,
					<br />
					감히 용감한 자도 가지 못한 곳을 가며,
					<br />
					감히 닿지 못할 저 밤하늘의 별에 이른다는 것<br />
					<br />
					이것이 나의 순례이며
					<br />
					저 별을 따라가는 것이 나의 길이라오
					<br />
					아무리 희망이 없을 지라도,
					<br />
					또한 아무리 멀리 있을지라도......
					<br />
				</div>
				<div className="author">- Miguel de Cervantes Saavedra -</div>
			</div>
		</div>
	);
};
*/

/**
const MyComponent = (props) => {
	return (
		<div>
			<div>저의 이름은 {props.name} 입니다.</div>
			<div>{props.saying}</div>
		</div>
	);
};

MyComponent.defaultProps = {
	name: '기본 이름',
};
 */

/**
const MyComponent = (props) => {
	return (
		<div>
			안녕하세요. 저의 이름은 {props.name}입니다. <br />
			children(시작태그와 종료태그 사이의 값) 값은 {props.children} 입니다.
		</div>
	)
};

MyComponent.defaultProps = {
	name :'기본 이름',
};
 */

/** 비구조화 할당 문법을 통해 props 내부 값 추출하기 */
/*const MyComponent = (props) => {
	const {name, children} = props;	// 비구조화 할당
	// const name = props.name;
	// const children = props.children;
	return (
		<div>
			안녕하세요. 제 이름은 {name}입니다. <br />
			children 값은 {children} 입니다.
		</div>
	)
};

MyComponent.defalutProps = {
	name : '기본이름',
};
*/

/**
const MyComponent = (props) => {
	const {name, age, children} = props;	// 비구조화 할당
	return (
		<div>
			안녕하세요. 제 이름은 {name}, 나이는 {age} 입니다. <br />
			children 값은 {children} 입니다.
		</div>
	)
};

MyComponent.defalutProps = {
	name : '기본이름',
};
 */
/** 
const MyComponent = ({name, children}) => {
	return (
		<div>
			안녕하세요 제 이름은 {name} 입니다. <br />
			children 값은 {children} 입니다.
		</div>
	)
};

MyComponent.defaultProps = {
	name :'기본이름',
};
 */

/** props의 타입을 지정할 때 : propTypes */
/**
import PropTypes from 'prop-types';
const MyComponent = ({ name, age, children }) => {
	return (
		<div>
			안녕하세요 제 이름은 {name}, 나이는 {age} 입니다. <br />
			children 값은 {children} 입니다.
		</div>
	);
};

MyComponent.defaultProps = {
	name: '기본이름',
};

MyComponent.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
};

 */
/*
import PropTypes from 'prop-types';
const MyComponent = ({ name, favoriteNumber, children }) => {
	return (
		<div>
			안녕하세요. 제 이름은 {name} 입니다. <br />
			children 값은 {children} 입니다.
			<br />
			제가 좋아하는 숫자는 {favoriteNumber} 입니다.
		</div>
	);
};

MyComponent.defaultProps = {
	name: '기본이름',
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};

*/

/** 클래스 컴포넌트 정의 
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class MyComponent extends Component {
	static defautPprops = {
		name: '기본이름',
	};

	static propTypes = {
		name: Proptypes.string,
		favoriteNumber: Proptypes.number.isRequired,
	};
	render() {
		const { name, favoriteNumber, children } = this.props; // 비구조화 할당
		return (
			<div>
				안녕하세요, 제 이름은 {name} 입니다. <br />
				children 값은 {children} 입니다. <br />
				제가 좋아하는 숫자는 {favoriteNumber} 입니다.
			</div>
		);
	}
}

export default MyComponent;
*/
