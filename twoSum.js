// function twoSum(nums, target) {
// 	// TODO: Implement your solution here
// 	// Hint: Consider using a Map for O(n) solution
// 	let answer;
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 0; j < nums.length; j++) {
// 			if ( i !== j && nums[i] + nums[j] === target) {
// 				answer = [i, j]
// 			}
// 		}
// 	}
// 	return answer;
// }

// solution 2: hash table
function twoSum(nums, target) {
	const hash = {};
	for (let i = 0; i < nums.length; i++) {
		let answer = target - nums[i];
		if (answer in hash) {
			return [hash[answer], i]
		} else {
			hash[nums[i]] = i
		}
	}
}

const testCases3 = [
	[[3, 99, 23, 2, 7, 11, 15], 9],
	[[3, 2, 4], 6],
	[[3, 3], 6]
];

const expectedOutputs3 = [
	[0, 1],
	[1, 2],
	[0, 1]
];

// TODO: Test your solution
testCases3.forEach(([nums, target], i) => {
	const result = twoSum(nums, target);
	const expected = expectedOutputs3[i];
	console.log(`Test ${i+1}: nums=[${nums}], target=${target} -> [${result}]`);
	console.log(`Expected: [${expected}]`);
	console.log(`Passed: ${JSON.stringify(result) === JSON.stringify(expected)}\n`);
});