function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr),
  };
}

function getMean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getMedian(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let median;
  if (arr.length % 2 !== 0) {
    median = sorted[Math.floor(arr.length / 2)];
  } else {
    let mid1 = sorted[arr.length / 2 - 1];
    let mid2 = sorted[arr.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

function getMode(arr) {
  let modeObj = {};

  arr.forEach(num => {
    if(!modeObj[num]) modeObj[num] = 0;
    else modeObj[num]++
  });

  let max = 0;
  let modeArr = []
  for (const key in modeObj) {
    if(modeObj[key] > max) max = modeObj[key];
    modeArr = [key];
  }
  return modeArr;
}

console.log(getMean([1, 2, 3, 4, 5]));
console.log(getMedian([1, 2, 3, 5, 7, 8]));
console.log(getMode([1, 2, 3, 3, 4, 4, 4]));
