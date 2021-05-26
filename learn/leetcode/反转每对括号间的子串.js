/*
* https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/
* */
var reverseParentheses = function(s) {
    //最先匹配到的完整括号肯定是最深的，每次匹配到就将起括号内的元素反转
    let tem = s.split('')
    let reversalIndexTemArr = []
    for (let i = 0; i < tem.length; i ++){
        if (tem[i] === '('){
            reversalIndexTemArr.push(i)
        }
        if (tem[i] === ')'){
            let start = reversalIndexTemArr.pop()
            tem.splice(start, i - start + 1, ...tem.slice(start, i + 1).reverse())
        }
    }
    return tem.filter(v => v !== '(' && v !== ')').join('')
};

console.log(reverseParentheses('(ed(et(oc))el)'));