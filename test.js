/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let openBrackets = ["(", "{", "["];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (openBrackets.includes(s[i])) {
            stack.push(s[i]);
        } else if (!stack.length) {
            return false;
        } else if (s[i] === "]") {
            if (stack.pop() !== "[") return false;
        } else if (s[i] === "}") {
            if (stack.pop() !== "{") return false;
        } else if (s[i] === ")") {
            if (stack.pop() !== "(") return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('()[]{}'))