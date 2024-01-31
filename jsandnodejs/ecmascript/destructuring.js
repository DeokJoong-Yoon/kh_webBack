/** 비구조화 할당 이전
 * 객체의 속성 또는 값을 해체하여 그 값을 변수에 각각 할당하여 사용하는 표현식으로
 * 구조 분해 할당이라고도 한다.
 
const Week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const mon = Week[0];
const tue = Week[1];
const wed = Week[2];

console.log(mon);
console.log(tue);
console.log(wed);

let user = {
    userId : 'javauser',
    userPwd : 'java1234',
    userName : '홍길동',
    userAge : 30,
};

const userId = user.userId;
const userPwd = user.userPwd;
const userName = user.userName;
const userAge = user.userAge;

console.log(userId);
console.log(userPwd);
console.log(userName);
console.log(userAge);
console.log("--------------");*/

/** 배열의 구조 분해 - 객체의  속성 또는 값을 해체하여 그 값을 변수에 각각 할당하여 사용 
const color = ['red', 'grean', 'blue'];
let [r, g, b] = color;

console.log(r);
console.log(g);
console.log(b);
console.log("----------");*/

/*
let array = [1, 2, 3];
let one = array[0];
let two = array[1];
let three = array[2];
*/
let [one, two, three] = [1, 2, 3];
console.log("one = " + one);
console.log("two = " + two);
console.log("three = " + three);
console.log(`${one} ${two} ${three}`);

/* 변수 값 변경 
const color = ['red', 'green', 'blue'];
let [r, g, b] = color;

[b, g, r] = [r, g, b];
console.log(r);
console.log(g);
console.log(b);
console.log("------------------")
*/

/* 조금 더 간결하게 
const [b, g, r] = ['red', 'green', 'blue'];
console.log(r);
console.log(g);
console.log(b);
console.log("-----------------");*/

/* 기본값 할당
const [a, b, c = 'C언어'] = ['C#', 'javascript'];
console.log(a);
console.log(b);
console.log(c);
console.log("-----------------");*/

/* 일부 요소값 무시하기 
const [a,, c, d] = ['C#', 'javascript', 'python', 'react'];
console.log(a);
console.log(c);
console.log(d);
console.log("-----------------");*/

/* 나머지 요소 가져오기 */
const [a,b, ...lang] = ['C#', 'javascript', 'python', 'react', 'C++'];
console.log(a);
console.log(b);
console.log(lang.length);
console.log(lang[0]);
console.log(lang[1]);
console.log(lang[2]);
console.log("-----------------");

/* 배열의 결합 */
const array1 = ['C#', 'javascript'];
const array2 = ['python', 'react', 'C++'];
const array3 = [array1, array2];

for(let i = 0; i < array1.length; ++i) {
    console.log(array1[i]);
}
console.log("-----------------");

for(let i = 0; i < array3.length; ++i) {
    console.log(array3[i]);
}
console.log("-----------------");

console.log(array3.toString());
console.log("-----------------");

/** for of 문 - for in 문처럼 객체의 프로퍼티를 열거하지 않는다. */
let coffeeNames = ["Americano", "Cappuccino", "Espresso"];

for(let name of coffeeNames) {
    console.log(name);
}
console.log("--------------");
for(let n in coffeeNames) {
    console.log(n);
}


