abstract class User {
  constructor(
    private firstName : string,
    private lastName : string,
    protected nickname : string 
    // 자식클래스에서 인스턴스에 접근하고 싶다면 protected 를 사용한다 
  ) {}
  abstract getNickName():void //call signature

  //getFullName 메소드 생성
  getFullName(){
    // this.firstName
    return `${this.firstName} ${this.lastName}`
  }
}

class Player2 extends User {
  getNickName(): void {
    console.log(this.nickname)
  }
}

// const nicooo = new User abstract 클래스는 새로운 인스턴스를 만들수 없고 오직 클래스 상속을 위해 존재 

const nicoo = new Player2("nico","las","니꼬")
// nicoo.getFullName()