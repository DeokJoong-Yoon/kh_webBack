/**
import React, { useState } from "react";
import ItemList from "./ItemList";

const ItemMain = () => {
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

      const [items] = useState(itemDataArray);

      const calcTotalPrice = (items) => {
        return items.reduce(function (sum, item) {
            return sum + item.price * item.quantity;
        }, 0);
      };
  return (
    <>
        {/* items. totalPrice 속성(props) 값 지정}
        <ItemList items={items} calcTotalPrice={calcTotalPrice(items)} />
        <ItemTotal items={items} />
    </>
  );
};
*/

/**
import React, { useState } from "react";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";

const ItemMain = () => {
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

      const [items] = useState(itemDataArray);


  return (
    <>
        {/* items 속성(props) 값 지정}
        <ItemList items={items} />
        <ItemTotal items={items} />
    </>
  );
};
*/

import React, { useState } from "react";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";
import ItemInput from "./ItemInput";

/**
 * 이벤트 처리 함수(onChangePrice)를 정의하고
 *
 */

const ItemMain = () => {
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
      price: 83000,
      quantity: 2,
    },
  ];

  const [items, setItems] = useState(itemDataArray);
  // 이벤트 처리 함수
  const onChangePrice = (name, price) => {
    console.log("onChangePrice name: " + name + " price : " + price);

    setItems((items) =>
      items.map((item) =>
        item.name === name ? { ...item, price: price } : item
      )
    );
  };

  return (
    <>
      {/* items 속성(props) 값 지정*/}
      <ItemInput items={items} onChangePrice={onChangePrice} />
      <hr />
      <ItemList items={items} />
      <ItemTotal items={items} />
    </>
  );
};

export default ItemMain;
