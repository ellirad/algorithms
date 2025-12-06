/*
11. Container With Most Water
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
 */

var maxArea = function(height) {
	let left = 0
	let right = height.length - 1
	let maxWater = 0

	while (left < right) {
		const width = right - left
		const h = Math.min(height[left], height[right])
		const area = h * width
		maxWater = Math.max(maxWater, area)

		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}

	return maxWater
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))