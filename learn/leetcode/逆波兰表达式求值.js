/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/28
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 1) return Number(tokens[0])
    let stack = []
    for (let i = 0; i < tokens.length; i ++){
        if (['+', '-', '*', '/'].includes(tokens[i])){
            let num1 = stack.pop()
            let num2 = stack.pop()
            if (tokens[i] === '+'){
                stack.push(num2 + num1)
            }else if (tokens[i] === '-'){
                stack.push(num2 - num1)
            }else if (tokens[i] === '*'){
                stack.push(num2 * num1)
            }else if (tokens[i] === '/'){
                stack.push(parseInt(num2 / num1))
            }
        }else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0]
};