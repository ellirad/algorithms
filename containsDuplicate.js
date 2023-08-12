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
function containsDuplicateWithSet(num) {
  const _num = new Set();
  let ans = false;

  num.forEach((element) => {
    if (_num.has(element)) {
     ans = true
    } else {
      _num.add(element);
    }
  });

  return ans
}

console.log(containsDuplicateWithSet([1, 2, 3, 4]));
console.log(containsDuplicateWithSet([1, 2, 3, 1]));
console.log(containsDuplicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
