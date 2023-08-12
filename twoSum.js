function twoSum(nums, target) {
  let x;
  let answer = null;

  for (let i = 0; i < nums.length; i++) {
    x = target - nums[i];
    let foundNumber = nums.find((num) => num === x);
    if (foundNumber) {
      answer = [nums.indexOf(nums[i]), nums.indexOf(foundNumber)];
      break
    }
  }

  return answer;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));