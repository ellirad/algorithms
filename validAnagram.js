
const isAnagram = function(s, t) {
    let hashS = {};
    let hashT = {};

    if(s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if(hashS[s[i]]) hashS[s[i]] += 1;
        else hashS[s[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        if(hashT[t[i]]) hashT[t[i]] += 1;
        else hashT[t[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        hashT[t[i]] -= 1;
        hashS[t[i]] -= 1;
        if(hashT[t[i]] === 0)  delete hashT[t[i]];
        if(hashS[t[i]] === 0)  delete hashS[t[i]];
    };

    if(Object.keys(hashT).length === 0 && Object.keys(hashS).length === 0) return true;
    else return false;
};

console.log(isAnagram('anagram', 'nagaram'));