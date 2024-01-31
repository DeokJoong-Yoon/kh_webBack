// 객체 리터럴
let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

console.log(`${dic.boy}
${dic.girl}
${dic.friend}`);

// 프로퍼티 추가
dic.apple = '사과';
dic.ten = 10;
console.log(dic.apple);
console.log(dic.ten);


// 프로퍼티 삭제
/*delete dic.girl;
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

// 프로퍼티 수정
let obj1 = {
    present : "현재",
};

console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);

//객체 상수 프로퍼티 수정
const obj2 = {              // 객체에서의 const는 주소를 고정한다는 뜻
    present : "현재",
};

console.log(obj2.present);
obj2.present = "선물";
console.log(obj2.present);
*/

// 객체 상수 변경(실행 결과?)
/*const obj1 = {
    present : "현재",
};

obj1 = { };
console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);*/

// 객체의 메소드
const unit = {
    attack : function(weapon) {
        return `${weapon}으로 공격한다.`;
    }
}

console.log(unit.attack("주먹"));
console.log(unit.attack("총"));

// 메서드 축약형
const unitt = {
    attack(weapona) {
        return `${weapona}으로 공격한다.`;
    }
}

console.log(unitt.attack("주먹"));
console.log(unitt.attack("총"));

// 이름, 나이를 프로퍼티로 가진 객체 리터럴을 정의해 주세요.
// 프로퍼티를 출력하는 메서스도 정의해주세요.
// 예시 : 홍길동은 나이 20입니다.

let member = {
    name : "진",
    age : "30",
    display : function() {
        return `${this.name} 님 나이는 ${this.age} 입니다.`;
    }
};

console.log(member.display());


// 대괄호 표기법
/* let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
}
 */

console.log(dic['boy']);
console.log(dic['girl']);
console.log(dic['friend']);

// 대괄호 표기법
/* let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
}
 */

let word = dic.friend;
console.log(word);
console.log(dic[word]);

let idx = 0;

let code = {
    ['index' + idx++] : idx,
    ['index' + idx++] : idx,
    ['index' + idx++] : idx,
};
console.log(code.index0);
console.log(code.index1);
console.log(code.index2);

/*단축 프로퍼티 적용전
let id = "javauser";
let pwd = "java1234";

let user = {
    id : id,
    pwd: pwd,
}

console.log(user.id);
console.log(user.pwd);
*/

/* 단축 프로퍼티 적용 
let id = "javauser";
let pwd = "java1234";

let user = {
    id,
    pwd,
}

console.log(user.id);
console.log(user.pwd);
*/

// for...in
let user = {
    id : "nodeuser",
    pw : "node1234",
    name : "홍길동",
    mobile : "010-8934-XXXX",
    country : "대한민국"
}

for (let info in user) {
    console.log(`${info} : ${user[info]}`)
}

/* 클래스 표현식 
const Coffee = class {
    constructor() {
        this.name = "Americano";
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}

let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.getName());
coffee.display();
*/

/* 접근자 
class Coffee {
    constructor(name) {
        this._name = name;
    }
    // getter 함수
    get name() {
        console.log("call getter");
        return this._name;
    }

    // setter 함수
    set name(name) {
        console.log("call setter");
        this._name = name;
    }

    display() {
        console.log(this._name);
    }
}

let coffee = new Coffee("Americano");
console.log(coffee.name);
coffee.name = "Espresso";
console.log(coffee.name);
coffee.display();*/

/* 정적 메서드 
class Coffee {
    constructor(name) {
        this._name = name;
        // 정적 프로퍼티
        Coffee.salesVolume++;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    display() {
        console.log(this._name);
    }
    // 정적 메서드
    static getSalesVolume() {
        return Coffee.salesVolume;
    }
}

// 정적 프로퍼티 초기화
Coffee.salesVolume = 0;
let coffee = new Coffee("Americano");
console.log(coffee.name);
// 정적 메서드 호출
console.log(Coffee.getSalesVolume());

coffee = new Coffee("Espresso");
console.log(coffee.name);
// 정적 메서드 호출
console.log(Coffee.getSalesVolume());
*/

/* 클래스 상속 */
class Coffee {
    constructor() {
        this.name = "Coffee";
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
    toString() {
        return "Coffee";
    }
}

let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.getName());
coffee.display();

// 클래스 상속
class Espresso extends Coffee {
    constructor() {
        super();
    }
    // 메서드 재정의
    toString() {
        return "Espresso";
    }
}
let espresso = new Espresso();
espresso.setName("Espresso");
console.log(espresso.name);
console.log(espresso.getName());
espresso.display();
