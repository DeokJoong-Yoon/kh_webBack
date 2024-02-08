import "./TodoList.css";

import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        type="text"
        className="searchBar"
        placeholder="검색어를 입력하세요"
      />
      <div className="listWapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
