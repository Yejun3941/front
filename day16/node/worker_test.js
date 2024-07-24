// const {
//   Worker,
//   isMainThread,
//   parentPort,
//   workerData,
// } = require("worker_threads");

// if (isMainThread) {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const mid = Math.floor(numbers.length / 2);

//   const worker1 = new Worker(__filename, { workerData: numbers.slice(0, mid) });
//   const worker2 = new Worker(__filename, { workerData: numbers.slice(mid) });

//   let sum1, sum2;

//   worker1.on("message", (message) => {
//     sum1 = message;
//     if (sum1 !== undefined && sum2 !== undefined) {
//       console.log("Total Sum:", sum1 + sum2);
//     }
//   });

//   worker2.on("message", (message) => {
//     sum2 = message;
//     if (sum1 !== undefined && sum2 !== undefined) {
//       console.log("Total Sum:", sum1 + sum2);
//     }
//   });

//   worker1.on("exit", () => console.log("Worker 1 exit"));
//   worker2.on("exit", () => console.log("Worker 2 exit"));
// } else {
//   const numbers = workerData;
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   console.log(sum);
//   parentPort.postMessage(sum);
// }

//case2
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // 부모 스레드
  const numWorkers = 4;
  const results = [];
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(__filename, {
      workerData: { start: i * 1e6, end: (i + 1) * 1e6 },
    });
    worker.on("message", (message) => {
      results.push(message);
      if (results.length === numWorkers) {
        console.log(
          "Total Sum:",
          results.reduce((sum, val) => sum + val, 0)
        );
      }
    });
    worker.on("exit", () => console.log(`Worker ${i} exit`));
  }
} else {
  // 워커 스레드
  const { start, end } = workerData;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += i;
  }
  parentPort.postMessage(sum);
}
