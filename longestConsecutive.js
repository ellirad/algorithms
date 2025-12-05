/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

var longestConsecutive = function(nums) {
	if (nums.length === 0) return 0;

	nums.sort((a, b) => a - b);

	let i = 1;
	let longest = 1;
	let current = 1;

	while (i < nums.length) {
		// skip duplicates
		if (nums[i] === nums[i - 1]) {
			i++;
			continue;
		}

		// check consecutive
		if (nums[i] === nums[i - 1] + 1) {
			current++;
		} else {
			longest = Math.max(longest, current);
			current = 1;
		}

		i++;
	}

	return Math.max(longest, current);
};

console.log(longestConsecutive([1,2,3,5,8, 322, 400]))