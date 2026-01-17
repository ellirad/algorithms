function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+ 1; j <numbers.length; j++) {
            if(numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

console.log(bubbleSort([2,8, 49, 1, 22, 0, 45, 100]));

function bubbleSort2(numbers) {
    for (let i = numbers.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j+ 1]
                numbers[j + 1] = temp
            }
        }
    }
    return numbers;
}

console.log(bubbleSort2([2 ,8, 49, 1, 22, 0, 45, 100]))