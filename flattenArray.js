/**
 * Do not change function name
 **/

function flatten() {
	// this === input
	const answer = [];

	function process (arr) {
		for (let i = 0; i < arr.length; i++) {
			if (!Array.isArray(arr[i])) {
				answer.push(arr[i])
			} else {
				process(arr[i])
			}
		}
	}
	process(this)

	return answer;
}

Array.prototype.flatten = flatten;

var input = [
	1, 2, 3,
	[4],
	[5, 6, [7], [8, [9, [10]]]],
	11, 12, 13,
	[14, [[[[[15, [16]]]]]]],
	17, 18,
	[19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];

var flatArray = input.flatten();
console.log(flatArray)