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
function fibonacci(position) {
  // Base case
  if (position < 3) return 1;

  return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log(fibonacci(1));
