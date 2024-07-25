const fs = require("fs");

const writeStream = fs.createWriteStream((path = "./writeme2.txt"));
writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});

writeStream.write("이 글을 씁니다.\n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();

//////////////////////////////////////////////////////////

const fs = require("fs");

const writeStream2 = fs.createWriteStream((path = "./writeme2-1.txt"));
writeStream2.on("finish", () => {
  console.log("파일 쓰기 완료");
});
let n = 0;
for (let i = 0; i < 5; i++) {
  n = n + 10 ** i;
  // writeStream2.write(n.toString().padStart(5, "0") + "\n");
  writeStream2.write(`00000${num}`.slice(-5));
}
writeStream2.end();
