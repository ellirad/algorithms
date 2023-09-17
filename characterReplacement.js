function characterReplacement(s, k) {
    let start = 0
    let end = 0;
    let maxLength = 0;
    let maxCount = 0;
    let freq = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        freq[char] = (freq[char] || 0) + 1;

        maxCount = Math.max(maxCount, freq[char]);

        if (end - start + 1 - maxCount <= k) {
            maxLength = Math.max(maxLength, end - start + 1);
        } else {
            freq[s[start]]--;
            start++;
        }

        end++;
    }

    return maxLength;
}

console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('AABABBA', 1))