import React from "react";

// props 값 수신
const ItemInput = ({ items, onChangePrice }) => {
  // 텍스트 입력 요소 변경 이벤트 처리 함수
  const handleChange = (e) => {
    console.log("name : " + e.target.name);
    console.log("value : " + e.target.value);

    onChangePrice(e.target.name, e.target.value);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.name}의 가격 : {""}
          {/* 함수 정의 */}
          <input
            type="text"
            name={item.name}
            value={item.price}
            onChange={handleChange}
          />
          {/* 함수를 정의하지 않고 직접 호출
          <input
           type="text"
           name={item.name}
           value={item.price}
           onChange={(e) => onChangePrice(item.name, e.target.value)}
          />*/}
        </li>
      ))}
    </ul>
  );
};

export default ItemInput;
