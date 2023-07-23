function solution(A) {
  A.sort((a, b) => a - b);

  let smallest = 1;
  for (let i = 0; i < A.length; i++) {
    // if the current element is equal to the smallest positive integer, increment it by 1
    if (A[i] === smallest) {
      smallest++;
    }
    // if the current element is greater than the smallest positive integer, break the loop
    if (A[i] > smallest) {
      break;
    }
  }
  // return the smallest positive integer
  return smallest;
}


console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([-1, -3]));
console.log(solution([1, 40, 300]));
