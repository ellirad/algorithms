// Steps:
// 1. find the middle of array
// 2. check if middle of array is grater than key, find the key in second half
// 3. else, search the key in first half
// 4. if array is less or equal than 1, you have the answer
// repeat step 1 to 4

function binarySearch(numArr, key) {
  const len = numArr.length;
  const middle = Math.floor(len / 2);
  const middleElement = numArr[middle];

  let left = numArr.splice(0, middle);
  let right = [...numArr];
  console.log(left, right, middleElement, middle);

  // Base case
  if (key === middleElement) return ans = true;

  if (key < middleElement && numArr.length !== 1) return binarySearch(left, key);
  
  if(key > middleElement && numArr.length !== 1) return binarySearch(right, key);

  else return false
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 55));
