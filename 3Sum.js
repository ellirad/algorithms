/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let ans = [];
  let ansIndex = [];

  for (let i = 2; i < sortedNums.length; i++) {
    let temp = [sortedNums[i - 2], sortedNums[i - 1]];
    let sumOfTwo = sortedNums[i - 2] + sortedNums[i - 1];
    let ansIndex = [i - 2, i - 1];

    for (let j = 0; j < sortedNums.length; j++) {
      console.log(sumOfTwo + sortedNums[j]);
      if (sumOfTwo + sortedNums[j] === 0) {
        if(j !== i - 2 || j !== i - 1)
        temp.push(sortedNums[j]);
      console.log(temp, 'temp')
      }
    }

    if (temp.length === 3) ans.push(temp);
  }

  return ans;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([1, 1, -2])); // [[-2,1,1]]
// console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]
console.log(threeSum([0, 0, 0]));
