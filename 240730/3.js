function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 Complete");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 2 Complete");
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 3 Complete");
      }, 3000);
    });
  }
  
  async function runTasksSequential() {
    console.time("Sequential");
    try {
      const result1 = await task1();
      console.log(result1);
      const result2 = await task2();
      console.log(result2);
      const result3 = await task3();
      console.log(result3);
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Sequential");
  
    // 예상되는 대략적인 시간과 그 이유: 약 6초
    // 이유: settimeout 1,2,3초 순으로 되어 있기 때문에, task1, task2, task3가 실행되면 전체 시간이 6초로 같아집니다.
  }
  
  async function runTasksParallel() {
    console.time("Parallel");
    try {
      // 병렬로 promise들을 한 번에 처리하는 코드
      const results = await Promise.all([task1(), task2(), task3()]);
      results.forEach((result) => console.log(result));
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Parallel");
  
    // 예상되는 대략적인 시간과 그 이유: 약 3초
    // 이유: 가장 오래 걸리는 작업이 3초이기 때문에, 모든 작업이 병렬로 실행되면 전체 시간이 가장 긴 작업 시간과 동일합니다.
  }
  
  runTasksSequential().then(() => runTasksParallel());
  