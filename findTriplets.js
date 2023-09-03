/**
 * @param {number[]} nums
 * @return {number[]}
 */

// The idea is sorting and two   pointer.
// [-4, -1, -1, 0, 1, 2]
// Function to find all triplets with zero-sum
function findTriplets(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1
        let r = nums.length - 1;

        if(i> 0&& nums[i] === nums[i-1]) continue;

        while(l<r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum=== 0) {
                result.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l+ 1]) l++;
                while (l < r && nums[r] === nums[r-1])  r--;
                l++;
                r--
            }
            else if(sum < 0) l++;
            else if(sum > 0) r--;

    }
    }
    return result;
}

let nums = [1, -1, 2, 0, -2, 4, -2, -2, 4];

console.log(findTriplets(nums));

