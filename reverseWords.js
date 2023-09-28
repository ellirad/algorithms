// this is a string
// siht si a gnirts
function reverseWords(string) {
    let newStr = string.split('');
    let result = [];
    let res = []
    let reversedWord = ''

    for (let j = newStr.length - 1; j >= 0; j--) {
        if(newStr[j] === ' ') {
            result.push(reversedWord);
            reversedWord = ''
        } else if(j === 0) {
            reversedWord+= newStr[j];
            result.push(reversedWord);
        }
        else reversedWord+= newStr[j];
    }
    for (let i = result.length - 1; i >= 0; i--) {
        res.push(result[i])
    }
    return res.join(' ')
}

console.log(reverseWords('this is a string'))