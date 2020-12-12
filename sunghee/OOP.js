//조직의 멤버를 목록화 시키고 싶다면? 


//목록만 있으면 되는 경우에는 배열을 쓰면 된다.
//배열의 핵심은 반복문과 사용할 때 배열의 장점이 빛난다.
let memberArray = ['egoing', 'graphittie', 'leezhce']

//경우에 따라 각각의 데이터가 어떤 데이터인지 설명하는 정보가 필요할 때는 객체를 쓰면 된다.
//객체의 기본적인 사용법 
//이름이 있는 정보를 정리정돈 할 때 쓴다.
let memberObject = {
    manager : 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
memberObject.designer = 'leezche'; // 값을 업데이트하거나 추가할 때
console.log(memberObject.designer) // 객체의 값을 읽을 수 있다.
console.log(memberObject['designer']) // 객체의 값을 읽을 수 있다.
delete memberObject.manager  //값을 삭제

//객체에서의 반복문 
for (let name in memberObject){
    console.log(name, memberObject[name]);
}

//객체를 찍어내는 공장 만들기
function Person(){
    this.name = 'kim'
    this.first = 10;
    this.second = 20;
    this.third = 30;
    this.sum = function(){
        return this.first + this.second + this.third
    }
}

console.log('Person()', Person()) // 그냥 함수를 호출했을 때 undefined
console.log('new Person()', new Person()) // new라는 키워드를 붙이면 완전히 다른 존재가 된다.
//person이라는 객체가 만들어졌다. 객체를 생성하는 생성자가 된다. 즉 생성자함수.
//생성자 함수를 만들게 되면 new를 사용함으로서 실행할 때마다 객체가 만들어진다.


//공통적으로 사용하는 속성을 만드는 것
function Person(){
    this.name = 'kim'
    this.first = 10;
    this.second = 20;
    this.third = 30;
   /*this.sum = function(){         
        return this.first + this.second + this.third
    }*/
}

//Person이라는 생성자함수에 공통적으로 사용할 sum이라는 메소드를 만든다
//Person이라는 생성자함수에 prototype(원형)을 정한다.
//생성자함수안에 정의하는 함수가 들어 가 있지 않기 때문에 정의하는 코드가 객체가 만들어 질때마다 생성되는 것이 아니라
//한번만 실행된다.
//한번만 실행되기 때문에 메모리를 절약할 수 있다.
//내가 가지고 있는 객체가 1억개 인데 sum 이라는 함수를 호출하면 이 하나의 함수를 1억개의 객체들이 같이 쓴다.
//이걸 통해 성능과 메모리를 절약할 수 있다.
Person.prototype.sum = function(){
    return this.first + this.second + this.third
}

 let kim = new Person('lee', 10, 10)


//객체를 만드는 공장으로서 constructor function으로 객체를 찍어내고 있었는데
//class라는 문법을 도입함으로서 객체지향프로그래밍을 할 수 있게 되었다.
//constructor function의 대체재 class
//constructor function은 1. 객체를 만든다 2.그 객체의 초기상태를 세팅한다.

class Person{
  constructor(name, first, second){
      this.name = name;
      this.first = first;
      this.second = second;
  }//객체가 생성 될 때 자동으로 생성되기 전에 실행되도록 약속되어있는 함수인 constructor를 class내에서 구현하는 방법  
}

let kim = new Person('kim', 10, 20)
//class는 객체를 만드는 공장이다.
//class에서 객체를 생성할 때 그 객체의 초기상태를 어떻게 세팅하는가?
//객체가 생성될 때 객체의 초기상태를 지정하기 위한 객체가 만들어 지기 직전에 실행되도록 약속되어있는 함수를 정의하면 그 목적에 달성할 수 있다.
//그 함수의 이름은 constructor 반드시 constructor를 써야한다.

//메소드 구현  이렇게 두가지로 쓰일 수 있다.
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    } 
  }
  Person.prototype.sum = function(){
    return this.first + this.second + this.third
}


class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    } 
    sum(){ // 같은 class에 속해있는 모든 객체가 공유하는 함수
        return this.first + this.second + this.third
  }
}
 //만약 kim이라는 객체만 다르게 동작하는 함수를 만들고 싶다면?
 //kim이라는 객체에 sum이라는 함수를 포함시키면 된다.
 //그러면 자바스크립트는 우선 kim이라는 객체가 sum이라는 함수를 가지고 있는지를 먼저 확인해보고,
//kim이라는 객체의 person이라는 class안에 sum이라는 메소드가 정의되어있는지를 보고 있다면 그것을 실행하게한다.
kim.sum = function(){
    return 'this : '+(this.first + this.second)
}

//상속
//상속을 사용하면 중복된 불필요한 코드들을 작성하지 않아도 되고, extends를 사용해 상속함으로써
//필요한 함수만 추가하면 되기 때문에 간결하며 유용하다.
//상속이란 무엇인가?
//상속해주는 클래스가 상위, 상속받는 클래스가 하위라면, 하위 클래스가 바뀌어도, 상위 클래스는 바뀌지 않는다. 
//그러나 상위 클래스가 바뀌면 하위 클래스도 바뀐다. 그런 기능과 특징을 갖은 것이 상속!
//그래서 class코드의 원본을 유지하고 코드의 업데이트가 자유롭고,
 //수정한 코드도 간섭 받지 않을 수 있는 것을 가능케 하는 것이 상속이다.
class personPlus extends Person{
    avg(){
        return (this.first + this.second)/2;
    }
}

//super라는 키워드
//super()는 부모클래스의 생성자를 부르는 것. 
//super.method()는 부모클래스에 있는 메소드를 호출하는 것.
class person {
    constructor(name, first, second) {
      this.name = name;
      this.first = first;
      this.second = second;
    }
    sum() {
      return this.first + this.second;
    }
  }
  
  class personPlus extends person {
    constructor(name, first, second, third) {
      super(name, first, second);
      this.third = third;
    }
    sum() {
      return super.sum() + this.third;
    }
    avg() {
      return (super.sum() + this.third) / 3;
    }
  }

  let superObj = {superVal: 'super'}
let subObj ={subVal: 'sub'}

subObj.__proto__ = superObj;
//__proto__  다른객체를 상속 받는다.


let superObj = {superVal: 'super'}
//자바스크립트한테 superObj를 부모로 하는 새로운 객체를 만들어! 라고 요청시
//Object.create이라는 메소드가 있는데 인자로 superObj애로 지정을 하면 이 메소드가 새로운 객체를 만드는데  // 
//superObj를 부모로 하는 새로운 객체다.
//Object.create 함수는 넘겨지는 객체를 prototype 삼아서 새로운 객체를 생성 하는 함수이다.
let subObj = Object.create(superObj)
subObj.subVal = 'sub';
//let subObj ={subVal: 'sub'}
//subObj.__proto__ = superObj; 이거랑 똑같다.
