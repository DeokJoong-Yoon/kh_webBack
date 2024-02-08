import "./Body.css";

/**
import React, { useState } from "react";

const Body = () => {
	const [text, setText] = useState("");
	const [option, setOption] = useState("");

	const handleChangeText = (e) => {
		setText(e.target.value);
	};

	const handleChangeOption = (e) => {
		setOption(e.target.value);
	};
	return (
		<div>
			<input type="text" value={text} onChange={handleChangeText} />
			<div>{text}</div>

			<select value={option} onChange={handleChangeOption}>
				<option value={"학생"}>학생</option>
				<option value={"직장인"}>직장인</option>
				<option value={"사회인"}>사회인</option>
			</select>
			<div>{option}</div>
		</div>
	);
};
*/

/**
import React, { useState } from "react";
const Body = () => {
	return (
		<div>
			<div>
				<input type="text" placeholder="이름" />
			</div>
			<div>
				<select>
					<option>선택</option>
					<option>남성</option>
					<option>여성</option>
				</select>
			</div>
			<div>
				<input type="date" />
			</div>
			<div>
				<textarea />
			</div>
		</div>
	);
};
 */

/**
import React, { useState } from "react";

const Body = () => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [birth, setBirth] = useState("");
	const [bio, setBio] = useState("");

	const onChangeName = (e) => {
		setName(e.target.value);
	};
	const onChangeGender = (e) => {
		setGender(e.target.value);
	};
	const onChangeBirth = (e) => {
		setBirth(e.target.value);
	};
	const onChangeBio = (e) => {
		setBio(e.target.value);
	};
	return (
		<div>
			<div>
				<input type="text" value={name} onChange={onChangeName} placeholder="이름" />
			</div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option value={""}>선택</option>
                    <option value={"남성"}>남성</option>
                    <option value={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio}></textarea>
            </div>
			<div>
				{name}<br />
                {gender}<br />
                {birth}<br />
                {bio}<br />
			</div>
		</div>
	);
};
 */

/** 
import React, { useState } from "react";
const Body = () => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [introduction, setIntroduction] = useState("");
	const [foreigner, setForeigner] = useState(false);
	const [gender, setGender] = useState("");
	const [nationality, setNationality] = useState("");

	const handleChangeUserId = (e) => {
		setUserId(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleChangeIntroduction = (e) => {
		setIntroduction(e.target.value);
	};
	const handleChangeForeigner = (e) => {
		setForeigner(e.target.value);
	};
	const handleChangeGender = (e) => {
		setGender(e.target.value);
	};
	const handleChangeNationality = (e) => {
		setNationality(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("userId : " + userId);
		console.log("password : " + password);
		console.log("introduction : " + introduction);
		console.log("foreigner : " + foreigner);
		console.log("gender : " + gender);
		console.log("nationality : " + nationality);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>아이디</label>
				<input
					type="text"
					id="userId"
					name="userId"
					value={userId}
					onChange={handleChangeUserId}
				/>
			</div>
			<div>
				<label>비밀번호</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={handleChangePassword}
				/>
			</div>
			<div>
				<label>소개</label>
				<textarea
					cols="20"
					rows="5"
					id="introduction"
					name="introduction"
					value={introduction}
					onChange={handleChangeIntroduction}
				></textarea>
			</div>
			<div>
				<label>외국인 여부</label>
				<input
					type="checkbox"
					id="foreigner"
					name="foreigner"
					checked={foreigner}
					onChange={handleChangeForeigner}
				/>
			</div>
			<div>
				<label>성별</label>
				<input
					type="radio"
					name="gender"
					value="male"
					checked={gender === "male"}
					onChange={handleChangeGender}
				/>
				남성
				<input
					type="radio"
					name="gender"
					value="female"
					checked={gender === "female"}
					onChange={handleChangeGender}
				/>
				여성
			</div>
			<div>
				<label>국적</label>
				<select
					id="nationality"
					name="nationality"
					value={nationality}
					onChange={handleChangeNationality}
				>
					<option value="">Please select one</option>
					<option value="Korea">Korea</option>
					<option value="Ameria">America</option>
					<option value="Japan">Japan</option>
				</select>
			</div>
			<button type="submit">등록</button>
		</form>
	);
};
*/

/**
import React, { useState } from "react";

import UserForm from "./UserForm";

const Body = () => {
	//컴포넌트 상태 정의
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [introduction, setIntroduction] = useState("");
	const [foreigner, setForeigner] = useState(false);
	const [gender, setGender] = useState("male");
	const [nationality, setNationlity] = useState("");

	// 이벤트 처리 함수 정의
	const handleChangeUserId = (e) => {
		setUserId(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleChangeIntroduction = (e) => {
		setIntroduction(e.target.value);
	};
	const handleChangeForeigner = (e) => {
		setForeigner(e.target.value);
	};
	const handleChangeGender = (e) => {
		setGender(e.target.value);
	};
	const handleChangeNationality = (e) => {
		setNationlity(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("userId : " + userId);
		console.log("password : " + password);
		console.log("introduction : " + introduction);
		console.log("foreigner : " + foreigner);
		console.log("gender : " + gender);
		console.log("nationality : " + nationality);
	};

	return (
		<UserForm
			userId={userId}
			password={password}
			introduction={introduction}
			foreigner={foreigner}
			gender={gender}
			nationality={nationality}
			onChangeUserId={handleChangeUserId}
			onChangePassword={handleChangePassword}
			onChangeIntroduction={handleChangeIntroduction}
			onChangeForeigner={handleChangeForeigner}
			onChangeGender={handleChangeGender}
			onChangeNationality={handleChangeNationality}
			onSubmit={handleSubmit}
		/>
	);
};
 */

/**
import React, { useState } from "react";

const Body = () => {
	const [state, setState] = useState({
		name: "",
		gender: "",
		birth: "",
		bio: "",
	});

	const handleChange = (e) => {
		console.log("현재 수정 대상", e.target.name);
		console.log("수정값", e.target.value);
		setState({
			...state, // 스프레드 연산자(전개 연산자)를 이용해 기존 객체 state 값을 나열
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div>
			<div>
				<input
					type="text"
					name="name"
					value={state.name}
					onChange={handleChange}
					placeholder="이름"
				/>
			</div>
			<div>
				<select name="gender" value={state.gender} onChange={handleChange}>
					<option value={""}>선택</option>
					<option value={"남성"}>남성</option>
					<option value={"여성"}>여성</option>
				</select>
			</div>
			<div>
				<input
					type="date"
					name="birth"
					value={state.birth}
					onChange={handleChange}
				/>
			</div>
			<div>
				<textarea name="bio" value={state.bio} onChange={handleChange} />
			</div>
			<div>
				{state.name} <br />
				{state.gender} <br />
				{state.birth} <br />
				{state.bio} <br />
			</div>
		</div>
	);
};
 */

/**
import React, { useState } from "react";

const Body = () => {
	// 객체 타입의 컴포넌트 상태(form) 정의
	const [form, setForm] = useState({
		userId: "",
		password: "",
		introduction: "",
		foreigner: false,
		gender: "",
		nationality: "",
	});

	// 객체 비구조화 할당 문법을 ㅗ분리하여 각각의 변수에 저장
	const { userId, password, introduction, foreigner, gender, nationality } =
		form;

	// 입력 요소 이벤트 처리 함수 정의
	const handleChange = (e) => {
		let inputValue = "";
		if (e.target.name === "foreigner") {
			console.log("e.target.value = " + e.target.value);
			console.log("e.target.checked = " + e.target.checked);

			inputValue = !(e.target.value === "true");
		} else {
			inputValue = e.target.value;
		}

		const nextForm = {
			...form,
			[e.target.name]: inputValue,
		};

		setForm(nextForm);
	};

	// 폼 submit 이벤트 처리 함수 정의
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("userId : " + userId);
		console.log("password : " + password);
		console.log("introduction : " + introduction);
		console.log("foreigner : " + foreigner);
		console.log("gender : " + gender);
		console.log("nationality : " + nationality);
	};
	return (
		<form onSubmit={handleSubmit}>
			<table>
				<tbody>
					<tr>
						<td>아이디</td>
						<td>
							<input
								type="text"
								name="userId"
								value={userId}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>비밀번호</td>
						<td>
							<input
								type="password"
								name="password"
								value={password}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>소개</td>
						<td>
							<textarea
								name="introduction"
								rows="5"
								value={introduction}
								onChange={handleChange}
							></textarea>
						</td>
					</tr>
					<tr>
						<td>외국인 여부</td>
						<td>
							<input
								type="checkbox"
								name="foreigner"
								checked={foreigner}
								value={foreigner}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>성별</td>
						<td>
							<input
								type="radio"
								name="gender"
								value="male"
								checked={gender === "male"}
								onChange={handleChange}
							/>
							남성
							<input
								type="radio"
								name="gender"
								value="female"
								checked={gender === "female"}
								onChange={handleChange}
							/>
							여성
						</td>
					</tr>
					<tr>
						<td>국적</td>
						<td>
							<select
								name="nationality"
								onChange={handleChange}
								value={nationality}
							>
								<option value="">Please select one</option>
								<option value="01">Korea</option>
								<option value="02">Germany</option>
								<option value="03">Australia</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>

			<div>
				<button type="submit">등록</button>
			</div>
		</form>
	);
};
 */

/**
import React, { useState } from "react";

function Viewer({number}) {
	return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
}
 

function Viewer(props) {
	const { number } = props;
	return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

const Body = () => {
	const [number, setNumber] = useState(0);
	// useState 의 문법
	// const [ name(State 변수), setName(set 함수)] = useState(초깃값);
	// 현재 상태값을 저장하고 있는 변수, 상태를 업데이트하는 함수
	const onIncrease = () => {
		setNumber(number + 1);
	};
	const onDecrease = () => {
		setNumber(number - 1);
	};
	return (
		<div>
			<h2>{number}</h2>
			<Viewer number={number} />
			{/*이 컴포넌트는 Porps로 Body 컴포넌트에 있는 state 변수 number가 전달
			   자식 컴포넌트는 Props로 전달된 state 값이 변하면 자신도 리렌더된다는 사실.
			}
			<div>
				<button onClick={onDecrease}> - </button>
				<button onClick={onIncrease}> + </button>
			</div>
		</div>
	);
};
*/

/**
 * 리액트의 REf를 이용하면 돔(DOM) 요소들을 직접 조작할 수 있다.
 * Ref는 Reference의 줄임발로 참조라는 뜻.
 *
 * useRef 사용하기
 * 리액트에서는 userRef라는 리액트 함수를 이용해 Ref 객체를 생성한다.
 */
import React, { useState, useRef } from "react";

const Body = () => {
	const [message, setMessage] = useState("");
	const textRef = useRef();

	const handleChange = (e) => {
		setMessage(e.target.value);
	};
	const handleClick = (e) => {
		// alert(message);
		// textRef.current.value = ""; // useRef로 입력 폼 초기화하기
		/*
		if (message.length < 5) {
			textRef.current.focus(); // useRef로 포커스하기
		} else {
			alert(message);
			setMessage("");
		}
		*/

		if (message === "") {
			alert("데이터를 입력해 주세요.");
			textRef.current.focus();
		} else {
			alert(message);
			setMessage("");
		}
	};
	return (
		<div>
			<input ref={textRef} value={message} onChange={handleChange}></input>
			<p>5글자 이상 입력해주세요.</p>
			<button onClick={handleClick}>작성 완료</button>
		</div>
	);
};

export default Body;
