/**
 * @param {number[]} nums
 * @return {number[]}
 */

// The idea is sorting and two pointer.
// [-4, -1, -1, 0, 1, 2]
// Function to find all triplets with zero sum
function findTriplets(nums) {
// Initialize an empty array to store the result
    let result = [];

// Sort the array in ascending order
    nums.sort((a, b) => a - b);

// Loop through the array from left to right
    for (let i = 0; i < nums.length - 2; i++) {
// Skip any duplicate elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;

// Initialize two pointers, one pointing to the next element and one pointing to the last element
        let left = i + 1;
        let right = nums.length - 1;

// Move the pointers towards each other until they meet
        while (left < right) {
// Calculate the sum of the three elements
            let sum = nums[i] + nums[left] + nums[right];

// If the sum is zero, add the triplet to the result array
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

// Move both pointers to skip any duplicate elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

// Move both pointers one step further
                left++;
                right--;
                right--;
            }
// If the sum is less than zero, move the left pointer to the right
            else if (sum < 0) {
                left++;
            }
// If the sum is greater than zero, move the right pointer to the left
            else {
                right--;
            }
        }
    }

// Return the result array
    return result;
}

// Example input
let nums = [1, -1, 2, 0, -2, 4, -2, -2, 4];

// Example output
console.log(findTriplets(nums));
// [[-2, -2, 4], [-2, 0, 2], [-1, 0, 1]]

