// callsignature
//함수를 선언하기 전에 인자와 리턴 타입을 미리 지정해 줄 수 있다.
// const add = (a:number,b:number) => a+b
// 리액트에서 많이 사용한다 ex.props 로 함수를 보낼때

type Add = (a:number, b:number) => number;

const add:Add = (a,b) => a + b