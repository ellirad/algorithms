/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let x;
  let result = []
  let hashTable = [];

  for (let i = 0; i < nums.length; i++) {
    x = target - nums[i];
    let index = nums.indexOf(x);
    if(index !== -1 ) {
      hashTable.push(index);
      let isInHashTable = hashTable.find(index => index === i);
      if(!isInHashTable) {
        result.push([i, index]);
    }
    }
    hashTable.push(i)
  }
  return result;
}


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
