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