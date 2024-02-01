/** 전개 연산자
 *  ... 은 전개 연산자(spread operator)라고 한다.
 * 전개 연산자는 반복 가능한 객체를 반환하는 표현식 앞에 표기하며,
 * 이를 통해 반복가능한 객체를 배열 리터럴 또는 함수의 인수 목록으로 펼칠 수 있다.
 */
const colorArray = ["red", "green", "blue"];
const newColorArray = [...colorArray, "oragne"];

console.log(colorArray);
console.log(newColorArray);
console.log("------------------------");

for(let color of colorArray) {
    console.log(color);
}
console.log("------------------------");

newColorArray.forEach((value, index) => {
    console.log(`${value}`);
});
console.log("------------------------");

const numArray = [2, 3, 4];
const newNumArray = [1, ...numArray, 5];

console.log(numArray);
console.log(newNumArray);
console.log("------------------------");

/** 함수 인수 목록 전개 - 전개 연산자를 사용하여 함수의 인수 목록으로 펼칠 수 있다. */
function myPrint(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const array = [1, 2, 3];
console.log("배열출력 : " + array);
myPrint(...array);
console.log("------------------------");

const display = ([a, b, c]) => {
    console.log(a);
    console.log(b);
    console.log(c);
}
display(array);
console.log("------------------------");

let str = "asdfaosrignoarng";
const stringArray = [ ..."xyz"];
console.log(stringArray);
myPrint(...stringArray);
display(stringArray);
console.log("------------------------");

const print = (...array) => {
    for(let a of array) {
        console.log(a);
    }
}

/** 배열 연결 - 전개 연산자를 활용하여 배열을 연결한다. */
const array1 = ["a", "b", "c"];
array1.push(...["d", "e"]);
console.log(array1);
console.log("------------------------");

array1.forEach((value, index) => {
    console.log(`${index}. ${value}`);
});

print(...array1);
console.log("------------------------");


/** 배열 최대값 - Math.max 로 전개 연산자를 이요한 값을 인자로 전달하여
 *  배열 최대값을 구하시오
 */
const array2 = [10, 20, 60, 50, 30];
console.log("최대값 : " + Math.max(...array2));