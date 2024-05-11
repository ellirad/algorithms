/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
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
