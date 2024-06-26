var topKFrequent = function (nums, k) {
  let freq = {};

  // if(nums.length === 1) return mostFr = nums;

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let keys = Object.keys(freq).sort(
    (a, b) => freq[b] - freq[a] || Number(a) - Number(b)
  );
  console.log(keys, 'key');

  return keys.slice(0, k);
};

function test (nums, k) {
  let hashTable = {};
  let ans = [];
  for(let num of nums) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }
  // {1: 3, 2: 2, 3: 1}

  Object.entries(hashTable).forEach(([key, value]) => {
    if(value >= k) ans.push(key);
  })
  return ans;
}

// console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([1], 1));
console.log(topKFrequent([-1, -1], 1));
console.log(topKFrequent([1, 2], 2));
// console.log(topKFrequent([-11,-1,1,-2,2,3], 2));