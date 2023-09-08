function containCommonItem(array1, array2) {
    let baseArray = [];
    let smallArray;
    let ans = false
    if(array1.length >= array2.length) {
        baseArray= new Set(array1);
        smallArray = array2
    }
    else {
        baseArray = new Set(array2);
        smallArray = array2
    }

    for (let i = 0; i < smallArray.length; i++) {
        if(baseArray.has(smallArray[i])) return ans = true;
    }

    return ans;
}

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'b'];

console.log(containCommonItem(array1, array2))