/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Need a function to multiply numbers.

var productExceptSelf = function(nums) {
    let ans= []
    for(let i = 0; i< nums.length; i++) {
        let _nums = [...nums]
        _nums[i] = 1;
        ans.push(productOfNums(_nums))
    }

    return ans
};

function productOfNums(arr) {
    const product = arr.reduce((a, b) => a* b); 
    return product
}