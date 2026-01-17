/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If the mid element is greater than the right element, the min must be to the right
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, the min is to the left or at mid (including mid)
            right = mid;
        }
    }

    // The left pointer now points to the minimum element
    return nums[left];

};

console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));