
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


function areCountersEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    console.log(keys1, keys2)

    // First check if both have the same number of keys
    if (keys1.length !== keys2.length) return false;

    // Then check each value
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}

// Example:
const counter1 = { a: 3, g: 1, m: 1, n: 0, r: 1 };
const counter2 = { a: 3, g: 1, m: 1, n: 0, r: 1 };

console.log(areCountersEqual(counter1, counter2)); // false
