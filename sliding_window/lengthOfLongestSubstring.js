/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let left = 0;
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
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("aabaab!bb"))
// console.log(lengthOfLongestSubstring('bbbbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
