/*
26. Remove Duplicates from Sorted Array

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let slow = 0;
	let fast = 1;


	while (nums[slow] <= nums[fast] && fast < nums.length) {
		if (nums[slow] === nums[fast]) {
			fast++;
		} else {
			nums[slow + 1] = nums[fast]
			slow++;
			fast++;
		}
	}

	return slow + 1
};