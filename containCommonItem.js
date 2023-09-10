function containCommonItem(array1, array2) {
    // let baseArray = [];
    // let smallArray;
    let ans = false
    // if(array1.length >= array2.length) {
    //     baseArray= new Set(array1);
    //     smallArray = array2
    // }
    // else {
    //     baseArray = new Set(array2);
    //     smallArray = array2
    // }
    //
    // for (let i = 0; i < smallArray.length; i++) {
    //     if(baseArray.has(smallArray[i])) return ans = true;
    // }
    //

    let hashTable = {};
    for (let array1Key of array1) {
        hashTable[array1Key] = (hashTable[array1Key] || 0 ) + 1;
    }

    for (let i = 0; i < array2.length; i++) {
        if(hashTable[array2[i]]) return ans = true;
        else continue;
    }
    return ans;
}

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 't'];

console.log(containCommonItem(array1, array2))