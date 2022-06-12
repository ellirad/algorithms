// This algorithem says us just one if statement run, if we put first line at the bottom
// then we got no number which divide by 15!

function fizzBuzz(num) {
  for(let i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(20)
