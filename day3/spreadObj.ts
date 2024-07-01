namespace NamespaceA {
  class A {
    aname: string = "A";
  }
  class B {
    bname: string = "b";
  }
  const a = new A();
  const b = new B();
  const c = { ...a, ...b }; // shallow copy
  const d = Object.assign(a, b); // alias
  console.log(c);
  console.log(d);

  a.aname = "a1";
  console.log(c);
  console.log(d);
}
