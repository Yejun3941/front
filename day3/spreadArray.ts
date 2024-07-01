namespace spreadArray {
  const a = [1, 2, 3];
  const b = [4, 5, 6];

  const c = [...a, ...b];
  const d = a.concat(b); // 얘도 copy

  console.log("a before'", c);
  console.log("d before", d);

  a.push(10);
  console.log("a", a);
  console.log("a before'", c);
  console.log("d before", d);
}
