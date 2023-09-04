/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 1;
    let hashMap =new Set();

    while (left < right && right < s.length) {
        if(!hashMap.has(s[left])) {
            hashMap.set(s[left]);
            right++
        }
    }

};