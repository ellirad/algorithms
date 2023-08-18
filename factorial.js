
/****************************
 Recursion: a recursive function will continue calling itself until
 base case satisfied.
*****************************/

// steps:
//4! = 4 * 3 * 2 * 1 => 24

function factorial(num) {
    // Base case
    if(num === 1) return 1;
    return num * factorial(num - 1)
}
console.log(factorial(4))