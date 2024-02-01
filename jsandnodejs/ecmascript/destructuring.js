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

/* 나머지 요소 가져오기 
const [a,b, ...lang] = ['C#', 'javascript', 'python', 'react', 'C++'];
console.log(a);
console.log(b);
console.log(lang.length);
console.log(lang[0]);
console.log(lang[1]);
console.log(lang[2]);
console.log("-----------------");*/

/* 배열의 결합 
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
console.log("-----------------"); */

/** for of 문 - for in 문처럼 객체의 프로퍼티를 열거하지 않는다. 
let coffeeNames = ["Americano", "Cappuccino", "Espresso"];

for(let name of coffeeNames) {
    console.log(name);
}
console.log("--------------");

for(let language of array3) {
    console.log(language);
}
console.log("--------------");

const array4 = [...array1, ...array2];
for(let language of array4) {
    console.log(language);
}
console.log("------------------");
*/

const score = [88, 79, 99, 62, 100, 81];
const sortedScore = score.sort();
console.log(sortedScore.toString);
console.log("------------------");

const subject = ["컴퓨터공학과", "인문학과", "전기전자공하과", "역사학과"];
// 배열의 값 출력 (2가지 이상)
console.log(subject[0]);
console.log(subject[1]);
console.log("------------------");
for (let i = 0; i < subject.length; ++i) {
    console.log(subject[i]);
}
console.log("------------------");

// 구조분해할당으로 설정하여 값 출력
let [a, b, c] = subject;
console.log(a);
console.log("------------------");

for (let s of subject) {
    console.log(s);
}
console.log("------------------");
subject.for
subject.forEach((value, index) => {
    console.log(`${index}. ${value}`);
});

// 구조분해할당으로 설정하여 값 출력
const [computer, humanities, electrical, history] = subject;
console.log(`학과 정보 : ${computer}, ${humanities}, ${electrical}, ${history}`);
console.log("------------------");

const [...department] = subject;
department.forEach((value, index) => {
    console.log(`${index}. ${value}`);
});
console.log("------------------");

/**
 * 객체의 구조 분해 할당
 * 배열뿐만 아니라 객체도 구조 분해 할당이 가능하다.
 * 객체를 구조 분해 할당할 때는 데이터 저장 순서가 아니라 key를 기준으로 한다.
let user = {
    userId : 'javauser',
    userPwd : 'java1234',
    userName : '홍길동',
    userAge : 30
};

// 변수 userId, userPwd, userName, userAge에는
// user 객체 프로퍼티의 value가 key를 기준으로 각각 할당된다.

let {userId, userPwd, userName, userAge} = user;
console.log(userId);
console.log(userPwd);
console.log(userName);
console.log(userAge);
console.log("------------------");

let { userId, userPwd, userName, userAge } =
    { userId: 'javauser', userPwd: 'java1234', userName: '윤진', userAge: 20 };
console.log(userId);
console.log(userPwd);
console.log(userName);
console.log(userAge);
console.log("------------------");
 */

/** 객체의 기본값 설정하기 
const user = {
    userName: '홍길동',
    userAge: 30,
};

let { userId = 'guest', userPwd, userName, userAge } = user;
console.log(userId);
console.log(userPwd);
console.log(userName);
console.log(userAge);
console.log("------------------");
*/

/** 객체의 나머지 요소 가져오기
const user = {
    userId : 'nodeuser',
    userPwd : 'node1234',
    userName : '윤진',
    userAge : 25
};

let {userId, ...rest} = user;

console.log(userId);
console.log(rest.userPwd);
console.log(rest.userName);
console.log(rest.userAge);
console.log("------------------");

let {...newUser} = user;

console.log(newUser.userId);
console.log(newUser.userPwd);
console.log(newUser.userName);
console.log(newUser.userAge);
console.log("------------------");
 */

/** 구조 분해 할당으로 출력해주세요 
console.log("------------------");

const person = {
    myName: "홍길동",
    age: 25,
    location: "서울시 강남구 테헤란로14길"
};

let { myName, age, location } = person;

console.log({myName});
for (let p in person) {
    console.log(p + " : " + person[p]);
}
let {...newPerson} = person;
for (let key in newPerson) {
    console.log(`${key} : ${newPerson[key]}`);
}
*/
/** 함수의 매개변수가 객체일 대 구조 분해 할당하기 */

let person = {
    myName: "홍길동",
    age: 25,
    location: "서울시 강남구 테헤란로14길"
};

function example({myName, age, location}) {
    console.log(`${myName} ${age} ${location}`);
}

example(person);

/**
 * 함수 example에서는 전달된 객체에서 프로퍼티의 value를 매개변수
 * myName, age, location에 각각 구조 분해 할당한다.
 * 객체를 전달할 때 이 문법을 함수의 매개변수에 적용하면
 * 필요한 프로퍼티만 전달할 수도 이어 코드가 훨씬 더 유연해진다.
 */

const test = ({myName : n, age : a, location : l}) => {
    console.log(`${n} ${a} ${l}`);
}
test(person);
console.log("------------------");

// 객체의 구조 분해 할당 과정에서 매개변수의 이름을 새롭게 바꿀 수 있다.
// 변수 이름 옆에 콜론과 함께 새 변수명을 쓰면 새이름으로 값이 할당된다.

/** 비 구조화 할당 이전 방식 
const coffee = {
    name : "Americano",
    price : 3000
};

const coffeeName = coffee.name;
const coffeePrice = coffee.price;

console.log(coffeeName);
console.log(coffeePrice);
console.log("------------------");
*/

/** 비 구조화 할당 방식 */
const coffee = {
    name : "Americano",
    price : 30000
};

const {name : coffeeName, price : coffeePrice} = coffee;

console.log(coffeeName);
console.log(coffeePrice);
