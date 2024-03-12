function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0]; 
  let max = arr[0]; 
  let sum = 0; 

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let avg = sum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// const getArrayParams = (...arr) => {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   const sum = arr.reduce((a, b) => a + b, 0);
//   const avg = sum / arr.length;
//   return { min: min, max: max, avg: +avg.toFixed(2) };
// };

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
