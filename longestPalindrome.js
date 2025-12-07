/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
 */

var longestPalindrome = function(s) {
	let result = ""
	let maxLen = 0

	function expand(l, r) {
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			if (r - l + 1 > maxLen) {
				maxLen = r - l + 1
				result = s.slice(l, r + 1)
			}
			l--
			r++
		}
	}

	for (let i = 0; i < s.length; i++) {
		expand(i, i)       // odd length
		expand(i, i + 1)   // even length
	}

	return result
}
