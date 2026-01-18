// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// position 4 => 3, position 9 => 34
// Steps:
// 1.

// position 3: 2 => 1 + 1

/*********************
 has time complexity of o(2^n)
 and it is bad, and we can change it to o(n) by dynamic programming.

 anything you do with recursion can be done iteratively(loop)
 ********************/
let calculation = 0
function fibonacci(position) {
  calculation++
  // Base case
  if (position < 3) return 1;

  return fibonacci(position - 1) + fibonacci(position - 2);
}

/*********************
Using dynamic programming method we increase the time complexity to 'o(n)'
*/

function fibMaster() {
  let cache = {}
  
  return function fibonacci(n) {
    calculation++
    if (cache[n]) {
      console.log('call from cache:', cache)
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fibonacci(n - 2) + fibonacci(n - 1)
        console.log(n, 'set in cache')
        return cache[n]
      }
    }
  }
}

// const fasterFib = fibMaster()
// console.log(fasterFib(10))

console.log(fibonacci(10))
console.log('fib calculation is:', calculation)
