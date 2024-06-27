class Person{
  name : string;
}

const jill:{name:string} = {
  name:'jill'
}
// 위와 아래가 같게 인식함 겁나 유연하네?
const Jill2:Person = {
  name:'jill2'
}

const person :Person=jill;
console.log(person)