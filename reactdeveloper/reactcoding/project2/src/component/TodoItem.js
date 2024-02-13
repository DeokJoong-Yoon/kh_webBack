import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createDate, onDelete }) => {
    const onClickDelete = () => {
        onDelete(id);
    }
  return (
    <div className="TodoItem" key={id}>
      <div className="checkboxCol">
        <input type="checkbox" checked={isDone} />
      </div>
      <div className="titleCol">{content}</div>
      <div className="dateCol">{new Date(createDate).toLocaleDateString()}</div>
      <div className="btnCol">
        <button type="button" onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
