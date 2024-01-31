// 화살표 함수
// 매개변수가 없을때 - function 을 생략하고 => 로 대체한다.
const f = function() {
    return "100";
};
console.log(f());

const af = () => {
    return "100";
};
console.log(af());

const sum = function(num1, num2) {
    return num1 + num2;
};
console.log(sum(4, 7));
const total = (num1, num2) => {
    return num1 + num2;
}
console.log("합 : " + total(3, 5));
// 매개변수가 하나일 때 - 괄호()를 생략할 수 있다.
const f1 = function(a) { return 100 + a};
console.log(f1(10));

const af1 = (a) => { return 100 + a};
console.log(af1(5));

const af1l = a => { return 100 + a};
console.log(af1l(1));

// 매개변수가 2개이상일 때 - 괄호를 생략할 수 없다.
const f2 = function(a, b) { return a + b };
console.log(f2(3, 5));

const af2 = (a, b) => { return a + b };
console.log(af2(10, 20));