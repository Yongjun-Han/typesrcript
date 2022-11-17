// overloading 은 여러개의 서로다른 call signature 가 있는 함수에 사용 
type Config = {
  path : string,
  state : object
}
type Push = {
  (path:string):void
  (config: Config):void;
}

const push:Push = (config) => {
  if(typeof config === "string"){console.log(config)}
  else {console.log(config.path)}
}

type Time = {
  (a:number, b:number) : number
  (a:number, b:number,c :number) : number //c 는 기본적으로 옵션이다 
}

const time:Time = (a,b,c?:number) => {
  return a+b
}