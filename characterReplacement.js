// function characterReplacement(s, k) {
//     let start = 0
//     let end = 0;
//     let maxLength = 0;
//     let maxCount = 0;
//     let freq = {};
//
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//
//         freq[char] = (freq[char] || 0) + 1;
//
//         maxCount = Math.max(maxCount, freq[char]);
//
//         if (end - start + 1 - maxCount <= k) {
//             maxLength = Math.max(maxLength, end - start + 1);
//         } else {
//             freq[s[start]]--;
//             start++;
//         }
//
//         end++;
//     }
//
//     return maxLength;
// }

var characterReplacement = function(s, k) {
    let res = 0;
    let count = new Map();
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        let len  = r - l + 1
        count.set(s[r], 1 + (count.get(s[r]) || 0))

        if ((len - Math.max(...count.values())) > k) {
            count.set(s[l], count.get(s[l]) - 1)
            l++;
        }
        len = r - l + 1;
        res = Math.max(res, len)
    }

    return res;
};

console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('AABABBA', 1))