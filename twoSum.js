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
// function twoSum(nums, target) {
//   let hashmap = {};
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (diff in hashmap) {
//       return [nums.indexOf(diff), i];
//     } else if(nums.indexOf(diff) !== -1) {
//       hashmap[nums[i]] = i
//     }
//   }
// }

// With two pointer in sorted array. it works only in sorted array.
// you should move both pointer. right and left
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) return [nums[left], nums[right]];
    else if(nums[left] + nums[right] > target) right--;
    else if(nums[left] + nums[right] < target) left++;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([10, 20, 35, 50, 75, 80], 70));
