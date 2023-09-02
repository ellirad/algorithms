function secondLargest(nums) {
        let max = -Infinity;
        let secondMax = -Infinity;

        for (let num of nums) {
            if (num > max) {
                secondMax = max;
                max = num;
            }
            else if (num > secondMax && num < max) {
                secondMax = num;
            }
        }

        return secondMax === -Infinity ? null : secondMax;
    }

let nums = [5, 3, 7, 9, 2, 4, 9];

console.log(secondLargest(nums));