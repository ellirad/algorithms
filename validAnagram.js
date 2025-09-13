/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
	let sortedS = s.split('').sort();
	let sortedT = t.split('').sort();
	if (sortedS.join('') === sortedT.join('')) return true;
	else return false;
};

