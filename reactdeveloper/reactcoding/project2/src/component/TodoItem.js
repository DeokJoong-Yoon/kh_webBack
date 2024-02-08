import './TodoItem.css';

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <div className="checkboxCol">
                <input type="checkbox"/>
            </div>
            <div className="titleCol">할 일</div>
            <div className="dateCol">{new Date().toLocaleDateString}</div>
            <div className="btnCol">
                <button>삭제</button>
            </div>
        </div>
    );
};

export default TodoItem;