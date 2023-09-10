function reverseString(s) {
    let reversed = new Array(s.length).fill(null);
    let len = s.length - 1;
    for(let i = 0; i < s.length ; i++) {
        reversed[len - i ] = s[i];
    }

    return reversed;
}

console.log(reverseString(["h","e","l","l","o"]))