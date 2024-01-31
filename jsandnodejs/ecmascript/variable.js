// ECSMAScript 6 문법
// 1. 변수를 중복 정의 할 수 있다.
var number = 10;

var number = 20;
console.log(number);

// 2-1. 변수가 사용되고 나서 선언이 되었을 때

console.log(number1);   // undefined
// var 로 선언한 변수는 호이스팅한다. (끌어올려진다.)
var number1 = 30;
console.log(number1);

// var로 선언한 변수는 호이스팅한다.
number2 = 40;
var number2;
console.log(number2);


// 3. for문 초기화에서 변수 선언
console.log(i); // undefined
for(var i = 0; i < 3; ++i) {
    console.log("test i = " + i);
}
i =0; // i의 초기화 과정

var i;
console.log(i); // undefined
for(i = 0; i < 3; ++i) {
    console.log("Test i = " + i);
}

// 4. if문 내에서 변수 선언
var num = 10;
console.log(num);
if(num !== 10) {
    var num = 20;
    console.log("num !== 10");
} else {
    console.log("num === 10");
}
console.log("num = " + num);

// 변수가 사용되고 난 후 선언이 되었을 때
console.log(numm);

if(numm !== 10) {
    // var로 선언한 변수는 호이스팅된다.
    var numm = 20;
    console.log("numm !== 10");
} else {
    console.log("numm === 10");
}
console.log("numm = " + numm);

// let 선언과 동시에 초기화
let number3 = 100;
console.log(number3);
// 같은 이름으로 중복 선언이 불가능하다.
// 반복 선언의 끌어올림이 발생하지 않는다.

// const 상수 선언. 선언과 동시에 초기화해야 한다.
const number4 = 10;
console.log(number4);
