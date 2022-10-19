/**
 * @param {number} n
 * @return {string[]}
 */
/*
* https://leetcode.cn/problems/generate-parentheses/
* */
var generateParenthesis = function(n) {
    let res = [], tem = []
    const backtrack = (left, right) => {
        if (!left && !right) return res.push(tem.join(''))
        if (left > 0){
            tem.push('(')
            backtrack(left - 1, right)
            tem.pop()
        } 
        if (left < right){
            tem.push(')')
            backtrack(left, right - 1)
            tem.pop()
        }
    }
    backtrack(n, n)
    return res
};
console.log(generateParenthesis(3));