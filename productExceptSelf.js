/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Need a function to multiply numbers.

// First solution with time complexity of O(2n) that is not good

// function productExceptSelf(nums) {
//     let ans= []
//     for(let i = 0; i< nums.length; i++) {
//         let _nums = [...nums]
//         _nums[i] = 1;
//         ans.push(productOfNums(_nums))
//     }

//     return ans
// };

// function productOfNums(arr) {
//     // const product = arr.reduce((a, b) => a* b);
//     // return product
//     let product = 1
//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i]
//     }
//     return product
// }

// Second approach with time complexity of O(n)

function productExceptSelf(nums) {
  let left = new Array(nums.length);
  let right = new Array(nums.length);
  let ans = new Array(nums.length);

  left[0] = 1;
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  console.log(left, 'left')

  for (let i = nums.length - 1; i >= 0; i--) {
    // len = 4, i = 3
    right[i - 1] = right[i] * nums[i];
  }
  console.log(right, 'right')

  for (let i = 0; i < nums.length; i++) {
    ans[i] = right[i] * left[i];
  }

  return ans;
}

// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([5, 3, 2, 1]));