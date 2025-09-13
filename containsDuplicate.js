/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* Time O(N) | Space O(N) */
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


// Solution 1: Sort array:
// function containDuplicate() {
// 	const sortedNums = nums.sort((a, b) => a - b);
// 	let isDuplicated = false;
// 	for ( let i = 0; i < sortedNums.length - 1; i++) {
// 		if (sortedNums[i] === sortedNums[i + 1]) {
// 			return isDuplicated = true
// 		}
// 	}
// 	return isDuplicated;
// }

// Solution 2: Set
function containDuplicate() {
  const numSet = new Set(nums);
  if (numSet.size === nums.length) return false;
  else return true;
}

console.log(containsDuplicateWithSet([1, 2, 3, 4]));
console.log(containsDuplicateWithSet([1, 2, 3, 1]));
console.log(containsDuplicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
