/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchRotatedArray = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found at index mid
        }

        // Determine which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Target in the left half
            } else {
                left = mid + 1; // Target in the right half
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Target in the right half
            } else {
                right = mid - 1; // Target in the left half
            }
        }
    }

    return -1; // Target not found

};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(searchRotatedArray(nums, target)); // Output: 4