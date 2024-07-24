const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // 부모일 때
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("from worker", message));
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  // 워커일 때
  // 이벤트라서 종료하지 않을경우 계속 포트가 열려 프로세스가 종료x
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
    console.log("child_finish");
  });
}
