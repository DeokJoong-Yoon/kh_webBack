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

const movies = [
  {
    id: 1,
    title: "Movie 1",
    genre: "Drama",
    release_date: "2022-01-01",
  },
  {
    id: 2,
    title: "Movie 2",
    genre: "Action",
    release_date: "2022-02-01",
  },
  {
    id: 3,
    title: "Movie 3",
    genre: "Comedy",
    release_date: "2022-03-01",
  },
];

const Add = ({ form, handleChange, handleAddMovie }) => {
  const { id, genre, title, release_date } = form;

  return (
    <form className="Add">
      <h1>Create Movie</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="id"
                value={id}
                onChange={handleChange}
                placeholder="Input movie id"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Input movie title"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={handleChange}
                placeholder="Input movie genre"
              />
            </td>
          </tr>
          <tr>
            <td>
              출시일 :
              <input
                type="date"
                name="release_date"
                value={release_date}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" onClick={() => handleAddMovie()}>
          Add Movie
        </button>
      </div>
    </form>
  );
};

const Item = ({ id, title, genre, release_date, handleDeleteMovie }) => {
  const onClickDelete = () => {
    handleDeleteMovie(id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{release_date}</td>
      <td>
        <button type="button" onClick={onClickDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

const List = ({ movie, handleDeleteMovie }) => {
  return (
    <div className="List">
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movie.map((it) => (
            <Item key={it.id} {...it} handleDeleteMovie={handleDeleteMovie} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [movie, setMovie] = useState(movies);

  const [form, setForm] = useState({
    id: "",
    title: "",
    genre: "",
    release_date: "",
  });
  const { id, title, genre, release_date } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDeleteMovie = (targetId) => {
    setMovie(movie.filter((it) => it.id !== targetId));
  };

  const isDuplicate = (id) => {
    if (!id) {
      return false;
    }
    return movie.some((it) => it.id == id);
  };

  const handleAddMovie = () => {
    if (!id) {
      alert("아이디를 입력해 주세요");
      return;
    } else if (isDuplicate(id)) {
      alert("이미 존재하는 ID 입니다.");
      return;
    } else if (!title) {
      alert("제목을 입력해주세요");
      return;
    } else if (!genre) {
      alert("장르를 입력해주세요");
      return;
    } else if (!release_date) {
      alert("출시일을 입력해 주세요");
      return;
    }

    setMovie([...movie, form]);
    alert("Add Movie Success!!!");
    setForm({
      id: "",
      title: "",
      genre: "",
      release_date: "",
    });
  };

  return (
    <div className="App">
      <div className="Nav">
        <Link to={"/list"} className="margin-left">
          List
        </Link>
        <Link to={"/add"} className="margin-left">
          Add New Movie
        </Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<List book={movie} handleDeleteMovie={handleDeleteMovie} />}
        />
        <Route
          path="/list"
          element={<List movie={movie} handleDeleteMovie={handleDeleteMovie} />}
        />
        <Route
          path="/add"
          element={
            <Add
              form={form}
              handleChange={handleChange}
              handleAddMovie={handleAddMovie}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
