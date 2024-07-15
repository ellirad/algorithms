function exampleFunction() {
    return setTimeout(() => {
        console.log('This will be logged after 2 seconds');
    }, 2000);
}

const timerId = exampleFunction();
console.log(timerId);  // This will log the timer ID
