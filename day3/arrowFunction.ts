const MyFunc = (message: string, title: string, age: number): boolean => {
  console.log(message);
  console.log(title);
  console.log(age);
  return true;
};

MyFunc("hello", "myFirstArrow", 30);

const func = () => console.log(); // 한줄 코드는 {} 안써도 댐
const func1 = () => ({ name: "dave" }); // 이름 없는 함수 만들때, ()안에 있는 값이 실행됨(return 이 된다) / 그럼 이게 일종의 콜백 함수인건가?
const func2 = () => {
  const val = 20;
  return val;
};

console.log(func()); // return 값은 존재 X, 출력값은 내부 함수에 존재 -> undefined
console.log(func1()); // return 값이 존재해서
console.log(func2()); // return 존재
