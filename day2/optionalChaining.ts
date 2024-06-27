namespace OptionalChainingNS {
  interface Wheels {
    count?: number; //? : nullable
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }
  // 결과값 받는곳 = (조건) ? 참일때 실행내용 : 거짓일때 실행내용
  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0
  // : car.wheels.count;

  const val1 = undefined;
  const val2 = 10;
  const result = val1 ?? val2; // 동치 result = val1!=null ? val1 : val2
}
