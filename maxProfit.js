
function maxProfit(prices) {
    let l = Infinity
    let m = 0

    for (let i = 0; i < prices.length; i++) {
        if (l > prices[i]) {
            l = prices[i];
        }
        else if (prices[i] - l > m) m = prices[i] - l;
    }

    return m
}

console.log(maxProfit([7, 1, 5, 1,3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([2, 4, 1]))

function test(arr) {
    let result = 0;
    let l = Infinity;
    let index = -1

    // find the smallest item
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < l) {
            l = arr[i];
            index = i
        }
    }
    for (let i = index + 1; i < arr.length; i++) {
        if(arr[i] - l > result) result = arr[i] - l;
    }
    return result;

}

console.log(test([7,6, 4, 3, 1]))
