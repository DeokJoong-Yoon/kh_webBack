// 여러 타입의 문자열 출력
const myName = "진";
const age = 30;
const height = 180.0;

console.log("My name is " + myName + ", " + "My age is " + age + ", " + "My height is " + height);

// 백틱을 사용한 여러 타입의 문자열 출력
// 템플릿 리터럴에 플레이스 홀더 ${...}을 넣을 수 있다.
// const myName = "홍길동";
// const age = 25;
// const height = 178.5;

console.log(`My name is ${myName}, My age is ${age}, My heigth is ${height}`);

// 일반 문자열의 개행
// const myName = "홍길동";
// const age = 25;
// const height = 178.5;

console.log("My name is " + myName + "\n" + "My age is " + age + "\n" + "My height is " + height);

//백틱 안에서의 개행
// const myName = "홍길동";
// const age = 25;
// const height = 178.5;

console.log(`My name is ${myName}
My age is ${age}
My height is ${height}`);

//백틱 안에서의 따옴표 사용
const say = `끊임없이 힘쓰고 노력하면 마침내 이루리라. "공자"`;
const intro = `Im'm a programmer`;

console.log(say);
console.log(intro);