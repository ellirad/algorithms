# 🚀 Data Structures & Algorithms Interview Crash Course - JavaScript Edition

Welcome to your comprehensive interview preparation in JavaScript! This course mirrors the Python version with identical problems but using JavaScript syntax and best practices.

## 📚 Learning Approach: Problem-Solving Based

### 🎯 How This Works:
1. **Problem Statement** - Clear description of what to solve
2. **Examples & Test Cases** - Understanding the requirements  
3. **Your Solution** - You implement the solution in JavaScript
4. **Hints & Tips** - If you get stuck
5. **Time/Space Analysis** - Optimize your solution

### 📖 Course Structure:
- **Arrays & Strings** (15+ problems)
- **Two Pointers** (8+ problems)
- **Sliding Window** (10+ problems)  
- **Hashing** (12+ problems)
- **Linked Lists** (10+ problems)
- **Trees & Graphs** (20+ problems)
- **Dynamic Programming** (15+ problems)

Let's start solving! 🎉

---

## 📊 Section 1: Arrays and Strings Fundamentals

### 🎯 Learning Goals:
- Master basic array operations and indexing
- Understand string manipulation techniques
- Learn time/space complexity analysis
- Solve 15+ fundamental problems

---

## 🟢 Problem 1: Running Sum of 1D Array (Easy)

**LeetCode #1480** | **Difficulty: Easy** | **Topic: Prefix Sums**

### Problem Statement:
Given an array `nums`, return the **running sum** of the array.

The running sum of an array is defined as `runningSum[i] = sum(nums[0]…nums[i])`.

### Examples:
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

### Your JavaScript Solution:

```javascript
/**
 * Calculate the running sum of the array.
 * @param {number[]} nums - Input array
 * @return {number[]} - Running sum array
 * 
 * Time Complexity: ?
 * Space Complexity: ?
 */
function runningSum(nums) {
    // TODO: Implement your solution here
    
}

// Test cases
const testCases = [
    [1, 2, 3, 4],
    [1, 1, 1, 1, 1],
    [3, 1, 2, 10, 1]
];

const expectedOutputs = [
    [1, 3, 6, 10],
    [1, 2, 3, 4, 5],
    [3, 4, 6, 16, 17]
];

// TODO: Test your solution
testCases.forEach((nums, i) => {
    const result = runningSum(nums);
    const expected = expectedOutputs[i];
    console.log(`Test ${i+1}: [${nums}] -> [${result}]`);
    console.log(`Expected: [${expected}]`);
    console.log(`Passed: ${JSON.stringify(result) === JSON.stringify(expected)}\n`);
});
```

---

## 🟢 Problem 2: Find Pivot Index (Easy)

**LeetCode #724** | **Difficulty: Easy** | **Topic: Prefix Sums**

### Problem Statement:
Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the right of the index.

### Examples:
```
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation: The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

### Your JavaScript Solution:

```javascript
/**
 * Find the pivot index where left sum equals right sum.
 * @param {number[]} nums - Input array
 * @return {number} - Pivot index, or -1 if none exists
 * 
 * Time Complexity: ?
 * Space Complexity: ?
 */
function pivotIndex(nums) {
    // TODO: Implement your solution here
    
}

// Test cases
const testCases2 = [
    [1, 7, 3, 6, 5, 6],
    [1, 2, 3],
    [2, 1, -1]
];

const expectedOutputs2 = [3, -1, 0];

// TODO: Test your solution
testCases2.forEach((nums, i) => {
    const result = pivotIndex(nums);
    const expected = expectedOutputs2[i];
    console.log(`Test ${i+1}: [${nums}] -> ${result}`);
    console.log(`Expected: ${expected}`);
    console.log(`Passed: ${result === expected}\n`);
});
```

---

## 🟢 Problem 3: Two Sum (Easy)

**LeetCode #1** | **Difficulty: Easy** | **Topic: Hash Table**

### Problem Statement:
Given an array of integers `nums` and an integer `target`, return **indices** of the two numbers such that they add up to `target`.

### Examples:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Your JavaScript Solution:

```javascript
/**
 * Find two numbers that add up to target.
 * @param {number[]} nums - Input array
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers
 * 
 * Time Complexity: ?
 * Space Complexity: ?
 */
function twoSum(nums, target) {
	
    // TODO: Implement your solution here
    // Hint: Consider using a Map for O(n) solution
  let answer;
  for (let i = 0; i < nums.length - 1; i++) {
	let a = nums[i];
	for (let j = 0; j < nums.length - 1; j++) {
		if ( i !== j && nums[i] + nums[j] === target) {
			 return answer = [i, j]
        }
    }
  }
	return answer;
}

// Test cases
const testCases3 = [
    [[2, 7, 11, 15], 9],
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
```

---

## 🟢 Problem 4: Is Subsequence (Easy)

**LeetCode #392** | **Difficulty: Easy** | **Topic: Two Pointers**

### Problem Statement:
Given two strings `s` and `t`, return `true` if `s` is a **subsequence** of `t`, or `false` otherwise.

### Your JavaScript Solution:

```javascript
/**
 * Check if s is a subsequence of t.
 * @param {string} s - The subsequence to find
 * @param {string} t - The main string
 * @return {boolean} - True if s is subsequence of t
 * 
 * Time Complexity: ?
 * Space Complexity: ?
 */
function isSubsequence(s, t) {
    // TODO: Implement your solution here
    // Hint: Use two pointers approach
    
}
```

---

## 🟡 Problem 5: Move Zeroes (Easy)

**LeetCode #283** | **Difficulty: Easy** | **Topic: Two Pointers**

### Problem Statement:
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note**: You must do this **in-place** without making a copy of the array.

### Your JavaScript Solution:

```javascript
/**
 * Move all zeros to the end while maintaining relative order.
 * @param {number[]} nums - Input array (modified in-place)
 * @return {void} - Modifies the array in-place
 * 
 * Time Complexity: ?
 * Space Complexity: ?
 */
function moveZeroes(nums) {
    // TODO: Implement your solution here
    // Hint: Use two pointers - one for non-zero position
    
}
```

---

## 📚 JavaScript-Specific Tips & Best Practices

### 🔧 Essential JavaScript Methods for Arrays:
- **`map()`** - Transform each element
- **`filter()`** - Keep elements that meet condition
- **`reduce()`** - Reduce array to single value
- **`forEach()`** - Iterate through array
- **`some()`** - Check if any element meets condition
- **`every()`** - Check if all elements meet condition
- **`find()`** - Find first element that meets condition
- **`indexOf()`** - Find index of element
- **`includes()`** - Check if array contains element

### 🔧 Essential JavaScript Methods for Strings:
- **`split()`** - Convert string to array
- **`join()`** - Convert array to string
- **`slice()`** - Extract portion of string
- **`substring()`** - Extract substring
- **`charAt()`** - Get character at index
- **`toLowerCase()`** / **`toUpperCase()`** - Case conversion

### 🔧 Modern JavaScript Features:
- **Destructuring**: `const [a, b] = array`
- **Spread Operator**: `[...array]` to copy array
- **Template Literals**: `` `Result: ${value}` ``
- **Arrow Functions**: `(x) => x * 2`
- **Map/Set**: Use for hash table problems

### 💡 Pro Tips:
1. **Use `const` for arrays/objects** that won't be reassigned
2. **Use `Map` instead of objects** for dynamic keys
3. **Use `Set` for unique values** and fast lookups
4. **Check for edge cases**: `null`, `undefined`, empty arrays
5. **Use meaningful variable names** for readability

---

## 📋 Complete Problem List (25 Total)

### 🟢 Easy Problems (Master These First):
1. ✅ **Running Sum of 1D Array** (#1480)
2. ✅ **Find Pivot Index** (#724)  
3. ✅ **Two Sum** (#1)
4. ✅ **Is Subsequence** (#392)
5. ✅ **Move Zeroes** (#283)
6. **Remove Duplicates from Sorted Array** (#26)
7. **Remove Element** (#27)
8. **Search Insert Position** (#35)
9. **Length of Last Word** (#58)
10. **Plus One** (#66)
11. **Merge Sorted Array** (#88)
12. **Valid Palindrome** (#125)
13. **Contains Duplicate** (#217)
14. **Valid Anagram** (#242)
15. **Reverse String** (#344)

### 🟡 Medium Problems (Level Up):
16. **Longest Substring Without Repeating Characters** (#3)
17. **3Sum** (#15)
18. **Sort Colors** (#75)
19. **Minimum Size Subarray Sum** (#209)
20. **Product of Array Except Self** (#238)
21. **Squares of a Sorted Array** (#977)
22. **Reverse Words in a String III** (#557)
23. **Middle of the Linked List** (#876)
24. **Container With Most Water** (#11)
25. **Maximum Subarray** (#53)

---

## 🎯 Learning Path:
1. **Start with Easy problems** to build confidence
2. **Focus on patterns**: Two pointers, sliding window, hash maps
3. **Practice daily**: 1-2 problems consistently
4. **Optimize solutions**: Start with brute force, then improve
5. **Explain your approach** out loud for interview practice

Ready to start coding in JavaScript? Let's solve these problems together! 🚀

---

*This JavaScript course mirrors the Python version - you and your friend can solve the same problems in your preferred languages and compare approaches!*
