import "./TodoEditor.css";

/**
const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>
      <div className="editorWrapper">
        <input type="text" palceholder="새로운 Todo..." />
        <button>추가</button>
      </div>
    </div>
  );
};
 */

import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const inputRef = useRef();
  const onDataSend = () => {
    if (!content) {
      // content값이 빈 문자열이면
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  // enter 키 눌러 아이템 추가하기
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onDataSend();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>
      <div className="editorWrapper">
        <input
          type="text"
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button type="button" onClick={onDataSend}>
          추가
        </button>
      </div>
    </div>
  );
};
export default TodoEditor;
