type SuperPrint = {
  // (arr : number[]):void
  // (arr : boolean[]):void
  // (arr : string[]):void
  <T>(arr : T[]):T
}
const superPrint : SuperPrint = (arr) => {
  // arr.forEach(i => console.log(i))
  return arr[0]
}

superPrint([1,3,4])
superPrint(["1","3","4"])
superPrint([false, true, true])

//일일히 concrete type 을 지정해주기에는 한계가 있다 
superPrint([1,2,true])

//generic 은 타입의 placeholder 같은 개념 타입스크립트가 해당 타입을 추론한다


