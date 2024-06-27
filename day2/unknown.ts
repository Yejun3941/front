let val: unknown = 22;
val = "string value";
val = new Array();
if (val instanceof Array) {
  val.push(33);
}

console.log(val);
// 타입 가드(타입체크)를 해줘야 작동한다.
