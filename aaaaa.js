// practice fizz buzz:
function fizzBuzzLogger(n) {
    if (n % 5 === 0) {
        console.log('fizz')
    } else {
        console.log('buzz')
    }
}

function fizzBuzz(n) {
    for (let i = 0; i < n; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            fizzBuzzLogger(i)
        } else {
            console.log(i);
        }
    }  
}

// fizzBuzz(20)

function harmlessRansomNote(text, subText) {
    let arrText = text.split(' ')
    let arrSubText = subText.split(' ')
    let hashMap = {}
    let answer = true

    for (let i = 0; i < arrSubText.length; i++) {
        hashMap[arrSubText[i]] = hashMap[arrSubText[i]] || 0 + 1
    }

    for (let i = 0; i < arrSubText.length; i++) {
        if (hashMap[arrText[i]] && hashMap[arrText[i]] > 0) {
            hashMap[arrSubText[i]] = hashMap[arrSubText[i]] - 1
            continue
        } else {
            return answer = false
        }
    }
    return answer;
}

// console.log(harmlessRansomNote('this is the end', ' '))

function sieve(n) {
    let primes = Array(n).fill(true)
    primes[0]= false;
    primes[1] = false;
    let answer = []

    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2; i * j < n; j++) {
            primes[i * j] = false
        }
    }
    
    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            answer.push(i)
        }
    }
    console.log(answer)
}

sieve(20)

function bubbleSort(numbers) {
    for (let i = numbers.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            
        }
    }
}