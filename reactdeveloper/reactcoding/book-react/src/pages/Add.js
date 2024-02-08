/**
import { useState } from "react";

const Add = ({ onCreate }) => {
  const [form, setForm] = useState({
    id: "",
    genre: "",
    title: "",
    createDate: "",
  });

  const { id, genre, title, createDate } = form; // 구조분해할당

  const handleChange = (e) => {
    const nextForm = {
      ...form, // 스프레드 연산자(... 기호, 전개 연산자)
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    console.log(`id: ${id}, ${!id}`);

    if (!id) {
      alert("아이디를 입력해 주세요");
      return;
    }

    onCreate({ form });
    alert("새로운 책이 등록되었습니다~");
    setForm({
      id: "",
      genre: "",
      title: "",
      createDate: "'",
    });
  };
  return (
    <form className="Add">
      <h1>책정보 등록</h1>
      <table>
        <tbody>
          <tr>
            <td>번호</td>
            <td>
              <input type="text" name="id" value={id} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>장르</td>
            <td>
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>책제목</td>
            <td>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>출간일</td>
            <td>
              <input
                type="date"
                name="createDate"
                value={createDate}
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

 */

const Add = ({ form, handleChange, onCreate }) => {
  const { id, genre, title, createDate } = form; // 구조분해할당

  return (
    <form className="Add">
      <h1>책정보 등록</h1>
      <table>
        <tbody>
          <tr>
            <td>번호</td>
            <td>
              <input type="text" name="id" value={id} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>장르</td>
            <td>
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>책제목</td>
            <td>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>출간일</td>
            <td>
              <input
                type="date"
                name="createDate"
                value={createDate}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" onClick={() => onCreate()}>
          등록
        </button>
      </div>
    </form>
  );
};

export default Add;
