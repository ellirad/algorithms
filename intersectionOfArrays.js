/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	let hash1 = {}
	let hash2 = {}
	let result = []

	for (let i = 0; i < nums1.length; i++) {
		hash1[nums1[i]] = (hash1[nums1[i]] || 0) + 1
	}

	for (let i = 0; i < nums2.length; i++) {
		hash2[nums2[i]] = (hash2[nums2[i]] || 0) + 1
	}

	for (const keys in hash1) {
		if (hash2[keys]) {
			result.push(Number(keys))
		}
	}

	return result
};