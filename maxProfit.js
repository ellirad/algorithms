
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

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([2, 4, 1]))