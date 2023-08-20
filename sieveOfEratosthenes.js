// Steps:
// 1. create an array with length of num and set all the indexes as true
// 2. set index 0 and 1 to false because those are not prime numbers.
// 3. create a for loop until i is less than square root of number.
// 4. create inner for loop until j is less than number.
// 5. in the inner loop set the j indexes as false.
// 6. create another for loop and check if value is true, return that index

// num = 20, [0, 1, 2, 3, 4, 5, 6]
function sieveOfEratosthenes(num) {
  let primes = new Array(num).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j < num; j++) {
        primes[i * j] = false
    }
  }
  let ans= [];
  for (let i = 0; i < num; i++) {
    if(primes[i]) ans.push(i)
  }
return ans;
}

console.log(sieveOfEratosthenes(200))
