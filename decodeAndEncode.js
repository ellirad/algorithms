function encode(array) {
    let hashTable = {};
    for (let i = 0; i < array.length; i++) {
        hashTable[i] = array[i];
    };
    return JSON.stringify(hashTable);
}

let str = encode(['eat', 'sleep', 'ate', 'ziiiiiiiiiiiiiiiiiiii', '', ';']);
console.log(decode(str));

function decode(str) {
    let ans = [];
    let hashTable = JSON.parse(str);
    Object.keys(hashTable).map(item => {
        ans[item] = hashTable[item];
    });
    return ans;
}
