/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  let ans = false;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) ans = true;
  }

  return ans;
};

//Ai solution- better performance
// function containsDuplicate(nums) {
//   // create an empty set to store the seen elements
//   let seen = new Set();
//   // loop through the array
//   for (let num of nums) {
//     // if the set already contains the current element, return true
//     if (seen.has(num)) {
//       return true;
//     }
//     // otherwise, add the current element to the set
//     else {
//       seen.add(num);
//     }
//   }
//   // if the loop finishes without returning true, return false
//   return false;
// }

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
