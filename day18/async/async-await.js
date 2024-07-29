async function myName() {
    return "Andy";
}
async function showName() { // 이름을 출력하는 함수
    const name = await myName();
    console.log(name);
}

console.log(showName()); // 콘솔에 이름 출력

function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`),1000)
  })
}

async function countOneToTen() {
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기 중...`)
    console.log(result)
  }
  console.log("완료")
}

countOneToTen()
