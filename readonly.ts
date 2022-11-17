type Age = number;
type Name = string;
type Player = {
  readonly name : Name
  age? : Age
}

const playerMaker = (name : string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 12;
//readonly 값은 변경이 불가능하다
// nico.name = "jason"