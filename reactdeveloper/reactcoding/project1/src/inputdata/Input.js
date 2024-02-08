import React, { useState } from "react";

const Input = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
    name: "",
  });

  const { id, password, name } = form;

  const handleChange = (e) => {
    let inputValue = e.target.value;
    const nextForm = {
      ...form, // 스프레드 연산자(... 기호, 전개 연산자)
      [e.target.name]: inputValue,
    };

    setForm(nextForm);
  };

  const handleClick = (e) => {
    console.log("id : " + id);
    console.log("password : " + password);
    console.log("name : " + name);
  };

  // (참고)
  // 스프레드 연산자를 이용하면 배열, 문자열, 객체 등과 같이 반복이 가능한 객체의 값을 개별 요소로 분해한다.
  // let arrayA = [1, 2, 3];

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="id" value={id} onChange={handleChange} />
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
            <td>이름</td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" onClick={handleClick}>
          등록
        </button>
      </div>
    </form>
  );
};

export default Input;
