export {};
let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
let check = "pak";
literal = "jeff";
literal = "tom";
// 리터럴 자동완성이 literal 내에서 정의 된 녀석만 가능해짐 good

// 리터럴에 값 안넣고 물어보면 undefined 로 출력

// 리터럴을 인터페이스 형식에 넣어서 그때그때 사용도 가능한가?
// gpt 는 타입 별칭이나 유니온 써서 하라고함

// type을 alias 로 제시해서 재사용성 올림

type Direc = "Up" | "Down" | "Left" | "Right";
let dir_a: Direc = "Up";
console.log(dir_a);
let dir_b: Direc = "Down";
console.log(dir_b);
let dir_c: Direc = "Right";
console.log(dir_c);
