/**
 * @param {number[]} nums
 * @return {number[]}
 */

// [-4, -1, -1, 0, 1, 2]
const threeSum = function (nums) {
  let sort = nums.sort((a, b) => a - b);
  let ans = []

  for(let i = 0; i < sort.length; i++) {
    let test = []
    let target = sort[i];
    let l = i+ 1;
    let r = sort.length - 1;

    while(l < r) {
      if(sort[l] + sort[r] > target) r--
      else if(sort[l] + sort[r] < target) l++
      else if(sort[l] + sort[r] === target) return test = [target, sort[l], sort[r]];
    }
    console.log(test)
    ans.push(test)
  }
  return ans
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([1, 1, -2])); // [[-2,1,1]]
// console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]
// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([-2,0,1,1,2]));
