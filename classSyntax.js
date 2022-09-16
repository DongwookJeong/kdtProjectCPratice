function OldConstructor(id, name, type){
    this.id = id;
    this.name = name;
    this.type = type;
}
const oldInstance = new OldConstructor(1, "이상해씨", "풀");
console.log(oldInstance);

class NewConstructor{
    constructor(id, name, type){
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
const newInstance = new NewConstructor(4, "파이리", "불");
console.log(newInstance);
// ? class선언할 때는 반드시 constructor()라는 함수를 사용하게끔
// ? constructor()라는 이름은 개발자가 다른 이름으로 바꿀 수는 없지만 위의 예제처럼은 가능하다.