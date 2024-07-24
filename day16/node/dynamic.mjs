// const a = false;

// if (a) {
//   import "./func"; //이렇게 할 경우 에러 발생
// }
// console.log("성공");

const a = true;
// 비동기 처리 후 promise 객체
if (a) {
  const m1 = import("./func.mjs");
  console.log(m1); //Promise { <pending> }
  const m2 = import("./var.mjs");
  console.log(m2); //Promise { <pending> }
  const m1_ = await import("./func.mjs");
  console.log(m1_); //[Module: null prototype] { default: [Function: checkOddOrEven] }
  const m2_ = await import("./var.mjs");
  console.log(m2_); //[Module: null prototype] { even: 'mjs 짝수입니다', odd: 'mjs 홀수입니다' }
}
console.log("성공");
