/**
import React, { useState } from 'react';
const ItemList = () => {
    const itemDataArray = [
        {
            name: "CPU",
            price: 310000,
            quantity: 1,
        },
        {
            name: "메인보드",
            price: 230000,
            quantity: 1,
        },
        {
            name: "메모리",
            price: 90000,
            quantity: 2,
        },
    ];
    // 상태와 설정함수 정의
    const [items] = useState(itemDataArray);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.name}>
                    {item.name} : {item.price} X {item.quantity} = {item.price * item.quantity} 원
                </li>
            ))}
        </ul>
    );
};
 */

/**
 * props 값으로 컴포넌트 함수의 파라미터로 전달받는다.
 * props 값은 객체 형태로 넘어오므로 객체 비구조화 할당 문법을 통해서
 * items, totalPrice로 분리하여 저장한다.
 */

/**
import Item from "./Item";
// props 값 지정
const ItemList = ({ items, calcTotalPrice }) => {
  return (
    <>
      <ul>
        {/* item이라는 props값 지정 }
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
      <p>합계 : {calcTotalPrice} 원</p>
    </>
  );
};
*/

import Item from "./Item";

// props 값 지정
const ItemList = ({ items }) => {
  return (
    <>
      <ul>
        {/* item이라는 props값 지정*/}
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
    </>
  );
};
export default ItemList;
