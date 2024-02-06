// 배열 타입 상태 정의
/*
import React, { useState } from "react";

const StateExample = () => {
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
                    {item.name} : {item.price} x {item.quantity} = {item.price * item.quantity} 원
                </li>
            ))}
        </ul>
    );
};
*/

/**
import React, { useState } from "react";

const StateExample = () => {
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
    const [item] = useState(itemDataArray);
    const [userName] = useState("홍길동");
	return (
        <>
            <h1>Hello {userName}!!</h1>
            <hr />
            <ul>
                {item.map((item) => (
                    <li key={item.name}>
                        {item.name} : {item.price} x {item.quantity} = {item.price} * {item.quantity} 원
                    </li>
                ))}
            </ul>
        </>
    );
};
*/

// 상태값 계산 함수 정의
// 상태값을 계산하는 함수를 정의하고 함수를 실행하여 계산한 값을 구한다.
import React, { useState } from 'react';
const StateExample = () => {
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
    // 상태값 계산 함수
    // reduce 메서드는 각 배열 요소에서 함수를 실행하여 단일 값을 생성

    const calcTotalPrice = (items) => {
        //                             합계, 항목의 값
        return items.reduce(function (sum, item) {
            return sum + item.price * item.quantity;
        }, 0);
    };

    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                    {item.name} : {item.price} x {item.quantity} = {item.price * item.quantity} 원
                    </li>
                ))}
            </ul>
            {/*상태값 계산 함수 실행*/}
            <p>합계 : {calcTotalPrice(items)} 원</p>
        </>
    );

}
export default StateExample;
