const fs = require("fs").promises; // 얘는 node/fs/promises.d.ts

fs.readFile("./readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
