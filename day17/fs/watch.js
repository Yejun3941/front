const fs = require("fs");

fs.watch("./target.txt", (eventType, filename) => {
  console.log(eventType, filename);
});
// 파일 존재하지 않을경우 에러발생.
