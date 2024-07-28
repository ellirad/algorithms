/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    let stack = [];
    const opr = ['+', '-', '*', '/'];

    for(let i = 0; i < tokens.length; i++) {
        if(opr.includes(tokens[i])) {
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            if(tokens[i] === "+") {
                stack.push(num1 + num2);
            }else if(tokens[i] === "/") {
                stack.push(Math.trunc(num2 /num1));
            } else if(tokens[i] === "-") {
                stack.push(num2 - num1);
            } else if(tokens[i] === "*") {
                stack.push(num1 * num2);
            }
        }else {
            stack.push(tokens[i]);
        }
    }

    return stack[0];
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
// console.log(evalRPN(["4","13","5","/","+"]))