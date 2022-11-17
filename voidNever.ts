// void 는 리턴이 없는 함수를 대상으로 사용 
//void 는 따로 지정하지 않아도 타스가 인식한다 
function hola(){
  console.log("hola")
}

// Never 는 함수가 절대로 리턴이 없을때를 대상으로 사용 

function bonjour(name : string | number) {
  if(typeof name === "string"){
    name // string
  } else if(typeof name == "number"){
    name // number
  } else {
    name // name 의 타입은 string 과 number 인데 이미 둘다 나왔으므로 never 가 된다. 이 코드는 절대로 실행되면 안된다 
  }
}