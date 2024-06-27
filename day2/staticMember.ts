// class ClassA {
//   static typeName: string;
//   instan_val: number;

//   constructor(instan_vla: number) {
//     // this.instan_val = instan_vl;
//   }

//   static getFullName() {
//     return `ClassA ${ClassA.typeName}`;
//   }
// }

// // const a = new ClassA();
// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());
// ClassA.typeName = "asdf";
// console.log(ClassA.getFullName());

class Runner {
  static lastRuntypeName: string; //여기는 class 변수
  // typename은 instance 변수
  constructor(private typename: string) {}

  run() {
    Runner.lastRuntypeName = this.typename;
  }
}

const a = new Runner("a");
const b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRuntypeName);
