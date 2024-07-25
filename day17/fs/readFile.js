const fs = require("fs"); // 얘는 node/fs.d.ts

fs.readFile((path = "./readme.txt"), (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data); // 인코딩 전 data
  console.log(data.toString()); //문자로 인코딩
});
