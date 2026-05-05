/**
 * Do not change function name
 **/
function deepSum() {
    const answer = 0;

    function process (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) {
                answer += arr[i];
            } else {
                process(arr[i]);
            }
        }
    }
    process(this)
    return answer;
}

Array.prototype.deepSum = deepSum;

var input = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, 14]]];
var sum = input.deepSum();
console.log(sum);