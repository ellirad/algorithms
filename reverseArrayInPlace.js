// Do not push element into a new array and return that array.
// Do not use array.reverse

function reverseArrayInPlace (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let _temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = _temp
    }
    return arr
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7])); // 7, 6, 5, 4, 3, 2, 1