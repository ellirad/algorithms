/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSum(nums, target) {
//  let map = new Map();

//  for(let i = 0; i < nums.length; i++) {
//   let diff = target - nums[i];

//   if(map.has(diff)) {
//     return [i, map.get(diff)]
//   }

//   map.set(nums[i], i)
//  }
// }

// With hash map
function twoSum(nums, target) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hashmap) {
      return [nums.indexOf(diff), i];
    } else if(nums.indexOf(diff) !== -1) {
      hashmap[nums[i]] = i  
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
