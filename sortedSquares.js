/*
977. Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	let i = 0
	let j = nums.length - 1
	let answer = []

	const power = (n) => n * n

	while (i <= j) {
		let right = power(nums[i])
		let left = power(nums[j])
		if (right > left) {
			answer.push(right)
			console.log(answer, 'a')
			i++
		} else if (right < left ) {
			answer.push(left)
			j--
		} else if (right === left && i !== j) {
			answer.push(right)
			i++
		} else if (i === j) {
			answer.push(left)
			break;
		}
	}

	return answer.reverse()
};


