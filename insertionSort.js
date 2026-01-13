function insertionSort(array) {
    const length = array.length
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0])
        } else {
            for (let j = 0; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(j , 0, array.splice(i , 1)[0])
                }
                
            }
        }
        
    }
    return array
}
console.log(insertionSort([2,8, 49, 1, 22, 0, 45, 100]));
