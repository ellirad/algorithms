// this is a string
// siht si a gnirts
function reverseWords(string) {
    let newStr = string.split('');
    let result = [];
    let reversedWord = ''

    for (let j = newStr.length - 1; j >= 0; j--) {
        if(newStr[j] === ' ') {
            result.unshift(reversedWord);
            reversedWord = ''
        } else if(j === 0) {
            reversedWord+= newStr[j];
            result.unshift(reversedWord);
        }
        else reversedWord+= newStr[j];
    }
    return result.join(' ')
}

console.log(reverseWords('this is a string'))