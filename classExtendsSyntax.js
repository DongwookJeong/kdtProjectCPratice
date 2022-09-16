//? 부모 class id, name, city라는 속성을 만들 준비가 되어있다. 
class ParentObject {
    constructor(id, name, city){
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
let parentObjectInstance = new ParentObject("1", "이상해씨", "대전");
console.log(parentObjectInstance);

// ? 부모 클래스의 기능을 그래도 전수(?) 받은 자식 Class. type이라는 속성을 추가하여 부모클래스와 다른 인스턴스를 생성할 수 있다.
class ChildObject extends ParentObject{
    constructor(type){
        // ? 부모 때문에 type 매개변수는 index 3번째가 된다.
        super();
        // ? 부모의 constructor() 데이터를 가져오는 특수한 함수다.
        this.type = type;
    }
}
let childObjectInstance = new ChildObject("풀");
console.log(childObjectInstance);

// ? 같은 객체여도 "일부분만" 공통이고 나머지는 하위는 다른 카테고리로 묶어야 한다면, 부모자식 관계로 접근하는 생성자 함수 ""extends""문법
// ? 부모의 클래스로부터 상속받아 목적에 맞게 생성자함수를 구성하는 것이 핵심
// ? 객체 지향 프로그래밍(OOP)에서는 이 개념이 상당히 중요