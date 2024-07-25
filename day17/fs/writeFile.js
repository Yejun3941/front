const fs = require("fs").promises;

fs.writeFile((file = "./writeme.txt"), (data = "글이 입력되었습니다."))
  .then(() => {
    return fs.readFile((path = "./writeme.txt"));
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.err(err);
  });
