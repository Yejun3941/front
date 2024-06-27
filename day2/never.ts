function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error("Tood old!");
  }
  if (age <= 18) {
    return false;
  }
  return true;
}

console.log(oldEnough(60));
