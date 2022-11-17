//어떤 타입인지 알수 없을때가 있다. ex API로 부터 데이터를 받아올때.
let a:unknown;

// let b = a +1; a의 타입을 알수 없어서 비허용
// 조건을 걸어줌으로써 해결가능
if(typeof a === "number") {
  let b = a + 1
}
