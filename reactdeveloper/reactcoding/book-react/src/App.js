/*
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";

const App = () => {
  return (
    <div className="App">
      {/* 리액트 라우터로 페이지 라우팅을 구현하는 앱에서는 Link라는 컴포넌트를 이용한다.
          <Link to='이동할 경로'> 링크 이름 </Link> }
      <div className="Nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/add"} className="margin-left">
          Add
        </Link>
        <Link to={"/list"} className="margin-left">
          List
        </Link>
      </div>
      <Routes>
        {/* 현재 URL 경로에 맞게 적절한 Route 컴포넌트를 페이지에 렌더링한다.}
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
};
*/

/*


const books = [
  {
    id: 1,
    genre: "철학",
    title: "존재의기술",
    createDate: "2023-07-10",
  },
  {
    id: 2,
    genre: "자서전",
    title: "스티브 잡스",
    createDate: "2020-01-01",
  },
  {
    id: 3,
    genre: "소설",
    title: "돈키호테",
    createDate: "1940-05-03",
  },
];

const App = () => {
  const [book] = useState(books);
  return (
    <div className="App">
      {/* 리액트 라우터로 페이지 라우팅을 구현하는 앱에서는 Link라는 컴포넌트를 이용한다.
          <Link to='이동할 경로'> 링크 이름 </Link> }
      <div className="Nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/add"} className="margin-left">
          Add
        </Link>
        <Link to={"/list"} className="margin-left">
          List
        </Link>
      </div>
      <Routes>
        {/* 현재 URL 경로에 맞게 적절한 Route 컴포넌트를 페이지에 렌더링한다.}
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List book={book} />} />
      </Routes>
    </div>
  );
};
*/

/**
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";

const books = [
  {
    id: 1,
    genre: "철학",
    title: "존재의기술",
    createDate: "2023-07-10",
  },
  {
    id: 2,
    genre: "자서전",
    title: "스티브 잡스",
    createDate: "2020-01-01",
  },
  {
    id: 3,
    genre: "소설",
    title: "돈키호테",
    createDate: "1940-05-03",
  },
];

const App = () => {
  const [book, setBook] = useState(books);

  const onDelete = (targetId) => {
    setBook(book.filter((it)=> it.id !== targetId));
  };

  const onCreate = ({form}) => {
    console.log(form);
    setBook([...book, form]);
  };

  return (
    <div className="App">
    {/* 리액트 라우터로 페이지 라우팅을 구현하는 앱에서는 Link라는 컴포넌트를 이용한다.
        <Link to='이동할 경로'> 링크 이름 </Link> }
    <div className="Nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/add"} className="margin-left">
        Add
      </Link>
      <Link to={"/list"} className="margin-left">
        List
      </Link>
    </div>
    <Routes>
      {/* 현재 URL 경로에 맞게 적절한 Route 컴포넌트를 페이지에 렌더링한다.}
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add onCreate={onCreate}/>} />
      <Route path="/list" element={<List book={book} onDelete={onDelete}/>} />
    </Routes>
  </div>
  );
}
*/

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";

const books = [
  {
    id: 1,
    genre: "철학",
    title: "존재의기술",
    createDate: "2023-07-10",
  },
  {
    id: 2,
    genre: "자서전",
    title: "스티브 잡스",
    createDate: "2020-01-01",
  },
  {
    id: 3,
    genre: "소설",
    title: "돈키호테",
    createDate: "1940-05-03",
  },
];

const App = () => {
  const [book, setBook] = useState(books);

  const [form, setForm] = useState({
    id: "",
    genre: "",
    title: "",
    createDate: "",
  });
  const { id, genre, title, createDate } = form; // 구조 분해 할당

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onDelete = (targetId) => {
    setBook(book.filter((it) => it.id !== targetId));
  };

  const onCreate = () => {
    console.log(`id : ${id}, ${!id}`);

    if (!id) {
      alert("아이디를 입력해 주세요");
      return;
    }

    console.log("id : " + id);
    console.log("genre : " + genre);
    console.log("title : " + title);
    console.log("createDate : " + createDate);

    setBook([...book, form]);
    alert("새로운 책이 등록되었습니다~");
    setForm({
      id: "",
      genre: "",
      title: "",
      createDate: "",
    });
  };

  return (
    <div className="App">
      {/* 리액트 라우터로 페이지 라우팅을 구현하는 앱에서는 Link라는 컴포넌트를 이용한다.
        <Link to='이동할 경로'> 링크 이름 </Link> */}
      <div className="Nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/add"} className="margin-left">
          Add
        </Link>
        <Link to={"/list"} className="margin-left">
          List
        </Link>
      </div>
      <Routes>
        {/* 현재 URL 경로에 맞게 적절한 Route 컴포넌트를 페이지에 렌더링한다.*/}
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={
            <Add form={form} handleChange={handleChange} onCreate={onCreate} />
          }
        />
        <Route
          path="/list"
          element={<List book={book} onDelete={onDelete} />}
        />
      </Routes>
    </div>
  );
};

export default App;
