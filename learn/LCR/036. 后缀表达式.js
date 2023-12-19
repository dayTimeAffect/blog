/**
 * 后缀表达式
 * https://leetcode.cn/problems/8Zf90G/
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let i = 0; i < tokens.length; i ++){
        if (tokens[i] === '+'){
            stack.push(stack.pop() + stack.pop())
        } else if (tokens[i] === '-'){
            stack.push(-stack.pop() + stack.pop())
        }else if (tokens[i] === '*'){
            stack.push(stack.pop() * stack.pop())
        }else if (tokens[i] === '/'){
            let num1 = stack.pop(), num2 = stack.pop()
            stack.push(num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1))
        }else{
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0]
};