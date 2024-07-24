const A = require("./globalA");

global.message = "안녕하세요";

console.log(A()); //위에서 message를 변경햇기에, A를 호출하면 message를 return해서 출력

console.log(global); // global variable에 message가 있는지 확인

console.log(message); // global message가 variable로 저장되어서 바로 실행해도 호출가능

console.log(this.message); //undefined

console.log(window.message); // 브라우저에서 확인하고 정리
