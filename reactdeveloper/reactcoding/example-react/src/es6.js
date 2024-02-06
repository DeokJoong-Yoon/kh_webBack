// ES6 이전
/**
function Dog(name) {
    this.name = name;
}

Dog.prototype.say = function() {
    console.log(this.name + '멍멍');
};

let dog = new Dog('검둥이');
dog.say();

//ES6
class Cat {
    constructor(name) {
        this.name = name;
    }
    
    say() {
        console.log(this.name + '멍멍');
    }
}

const cat = new Cat('흰둥이');
cat.say();
 */

// 화살표 함수 문법
/**
setTimeout(function () {
	console.log('hello world!');
}, 1000);

setTimeout(() => {
	console.log('hello wolrd!');
}, 3000);
 */

function BlackDog() {
	this.name = '흰동우';
	return {
		name: '검둥이',
		bark: function () {
            // function()에서 : 현재 객체의 this
			console.log(this.name + '멍멍!');
		},
	};
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
	this.name = '흰둥이';
    return {
        name : '검둥이',
        bark : () => {
            // () => 에서 : 현재 함수의 프로퍼티를 가르키는 this
            console.log(this.name + '멍멍!');
        },
    };
}

const whiteDog = new WhiteDog();
whiteDog.bark();
