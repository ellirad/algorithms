const str = "ABCC"; // k = 2, AAAA => 4

function longestRepeatingSubstring(s, k) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let freq = {};
    let maxCount = 0

    for (let i = 0; i < s.length; ++i) {
        let wl = end - start + 1;
        let char = s[i];
        freq[char] = (freq[char] || 0) + 1;

        maxCount = Math.max(maxCount, freq[char]);

        if(wl - maxCount <= k) { // the characters we don't need to replace, so we don't count them
            maxLength = Math.max(wl, maxLength);
        } else {
            freq[s[start]] = freq[s[start]] - 1;
            start++;
        }
        end++;
    }
    return maxLength
}

console.log(longestRepeatingSubstring(str, 2));