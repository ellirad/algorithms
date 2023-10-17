function selectionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let min = i;
        let temp = numbers[i];
        for (let j = i+ 1; j < numbers.length; j++) {
            if(numbers[j] <numbers[min]) {
                min = j;
            }
        }
        numbers[i] = numbers[min];
        numbers[min] = temp
    }

    return numbers
}

console.log(selectionSort([30, 2, 3, 1, 40, 54]))