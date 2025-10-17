/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let hashMap = {}
	for (let i = 0; i < nums.length; i++) {
		hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1
	}

	for (const keys in hashMap) {
		if (hashMap[keys] === 1) {
			return parseInt(keys);
		}
	}
	return null
};

console.log(singleNumber([4,1,2,1,2]))