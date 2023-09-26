// this is a string
// siht si a gnirts
function reverseWords(string) {
    let newStr = string.split(' ');
    console.log(newStr)
    let result = [];
    let reversedWord = ''

    for(let i = 0; i < newStr.length; i++) {
        for (let j = newStr[i].length; j <= 0; j--) {
            reversedWord+= newStr[i][j];
            console.log(reversedWord)
        }
        result.push(reversedWord);
        reversedWord = ''
    }

    return result
}

console.log(reverseWords('this is a string'))