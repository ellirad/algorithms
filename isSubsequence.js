/*
### Problem Statement:
Given two strings `s` and `t`, return `true` if `s` is a **subsequence** of `t`, or `false` otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of
the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

function isSubsequence(s, t) {
	// let answer = false;
	// let j = 0;
	// for (let i = 0; i < s.length; i++) {
	// 	j++
	// 	for (j; j < t.length; j++) {
	// 		if (s[i] === t[j]) {
	// 			return
	// 		} else if (s[i] !== t[j] && j === t.length - 1) {
	// 			return answer = false
	// 		}
	// 	}
	// 	return answer
	// }
	// console.log(answer)
	// return answer
		let i = 0, j = 0;
		while (i < s.length && j < t.length) {
			if (s[i] === t[j]) i++;
			j++;
		}
		return i === s.length;
}

isSubsequence('abcd', 'aabbcckkie')