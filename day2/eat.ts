function eat(calories: number) {
  console.log("I eat " + calories + " calories");
  console.log(`IIIII Eat ${calories} calories`);
}

function sleepIn(hours: number): void {
  console.log(`I slept ${hours} hours`);
  return undefined;
}

// void 는 class , undefined 는 객체 / return 에서는 객체가 나와야함
let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
