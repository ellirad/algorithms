function maxArea(arr) {
	let right = arr.length - 1
	let left = 0
	let max = 0
	let maxArea = 0

	while (left < right) {
		max = (right - left) * Math.min(arr[left], arr[right])
		maxArea = Math.max(maxArea, max)
		if (arr[left] < arr[right]) {
			left++
		} else {
			right--
		}
	}

	return maxArea
}

// console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49

function flatten() {
	let answers = []

	function process(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (!Array.isArray(arr[i])) {
				answers.push(arr[i])
			} else {
				process(arr[i])
			}
		}
	}
	process(this)
	return answers;
}

var input = [
	1, 2, 3,
	[4],
	[5, 6, [7], [8, [9, [10]]]],
	11, 12, 13,
	[14, [[[[[15, [16]]]]]]],
	17, 18,
	[19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];
Array.prototype.flatten = flatten
// var flatArray = input.flatten();
// console.log(flatArray)


function generateParenthesis(n) {
	let answers = []

	function create(current, open, close) {
		if (current.length === n * 2) {
			answers.push(current)
			return
		}
		if (open < n) {
			create(current + '(', open+ 1, close)
		}
		if (close < open) {
			create(current + ')', open, close+ 1)
		}
	}
	create('', 0, 0)

	return answers
}

// console.log(generateParenthesis(4))
// (), (()), ((())), ()()(), ()(())

function longestCommonPrefix(strs) {
	let first = strs[0]

	for (let i = 0; i < first.length; i++) {
		const char = first[i]

		for (let j = 0; j < strs.length; j++) {
			if (i >= strs[j].length || strs[j][i] !== char) {
				return first.slice(0, i)
			}
		}
	}
	return first
}


let array = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(array), "test");