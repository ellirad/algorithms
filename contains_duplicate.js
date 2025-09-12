/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 */

let nums = [5,2,3,1,1]

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