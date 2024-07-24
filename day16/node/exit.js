let i = 0;
setInterval(() => {
  if (i === 5) {
    console.log("종료");
    process.exit();
  }
  console.log(i);
  i++;
}, 1000);
