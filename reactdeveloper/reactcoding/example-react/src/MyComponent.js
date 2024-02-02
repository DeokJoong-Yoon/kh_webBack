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

export default MyComponent;
