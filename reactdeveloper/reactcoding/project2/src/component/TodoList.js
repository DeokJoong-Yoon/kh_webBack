import "./TodoList.css";

/*
const TodoList = ({ todo }) => {
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        className="searchBar"
        placeholder="검색어를 입력하세요"
      />
      <div className="listWapper">
        {todo.map((it) => (
          <div key={it.id}>{it.content}</div>
        ))}
      </div>
    </div>
  );
};
*/

/*
import TodoItem from "./TodoItem";
const TodoList = ({ todo, onDelete }) => {
  return (
    <div className="TodoList">
      <h4>Todo List 🌱 </h4>
      <input
        type="text"
        className="searchBar"
        placeholder="검색어를 입력하세요"
      />
      <div className="listWrapper">
        {todo.map((it) => (
          <TodoItem key={it.key} {...it} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};
*/

import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onDelete }) => {
  const [search, setSerach] = useState("");
  const onChangeSearch = (e) => {
    setSerach(e.target.value);
  }
  const getSearchResult = () => {
    return search === ""
            ? todo
            // 대소문자 구분
            // : todo.filter((it) => it.content.includes(search));
            // 대소문자 노구분
            : todo.filter((it => it.content.toLowerCase().includes(search.toLowerCase())));
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱 </h4>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        className="searchBar"
        placeholder="검색어를 입력하세요"
      />
      <div className="listWrapper">
        {/*todo.map((it) => (
          <TodoItem key={it.key} {...it} onDelete={onDelete}/>
        ))*/}
        {getSearchResult().map((item) => (
          <TodoItem key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
