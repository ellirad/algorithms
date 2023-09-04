/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let hashMap = new Set();

    for (let i = 0; i < s.length; i++) {
        if (!hashMap.has(s[i])) {
            hashMap.add(s[i]);
            maxLength = Math.max(maxLength, hashMap.size)
        } else {
            while (s[left] !== s[i]) {
                hashMap.delete(s[left]);
                left++
            }
            left++
        }
        right++
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))