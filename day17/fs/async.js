const fs = require("fs");
console.time("async");
console.log("시작");

fs.readFile((path = "./readme2.txt"), (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});

fs.readFile((path = "./readme2.txt"), (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});
fs.readFile((path = "./readme2.txt"), (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});
console.log("Finished");
console.timeEnd("async");
