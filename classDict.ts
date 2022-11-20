type Words = {
  [key:string]:string
}
// Words 가 오직 string 타입의 프로퍼티를 가진 객체라고 선언해주는것

class Dictionary {
  private words: Words
  constructor(){
    this.words = {}
  }
  add(word : Word) {
    //여기서부터 이어서 작업 
}

class Word {
  constructor(
    public term: string,
    public def : string
  ) {}
}


const kimchi = new Word("kimchi", "한국의 음식")
