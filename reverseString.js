function reverseString(s) {
    // let reversed = new Array(s.length).fill(null);
    // let len = s.length - 1;
    // for(let i = 0; i < s.length ; i++) {
    //     reversed[len - i ] = s[i];
    // }
    //
    // return reversed;
    let len = s.length - 1;
    for(let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        let temp2 = s[len - i];
        s[len - i ] = temp;
        s[i] = temp2
    }
    return s
}

console.log(reverseString(["h","e","l","l","o"]))