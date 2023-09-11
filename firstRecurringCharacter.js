function firstRecurringCharacter(array) {
    let hashTable = {};
    for (let i = 0; i < array.length; i++) {
        if(hashTable[array[i]]) return array[i];
        else {
            hashTable[array[i]] = array[i];
        }
    };
    return 'nothing found!'
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter([4, 10 ,1, 20, 3, 5, 11, 2, 4]))
console.log(firstRecurringCharacter([1, 2, 3, 4]))