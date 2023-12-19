/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/19
 */
/*
* https://leetcode.cn/problems/bracket-lcci/
* */
var generateParenthesis = function(n) {
    let res = []
    const create = (left, right, cur) => {
        if (left + right === 0) return res.push(cur)
        if (left > 0){
            create(left - 1, right, cur + '(')
        }
        if (right > 0 && right > left){
            create(left, right - 1, cur + ')')
        }
    }
    create(n, n, "")
    return res
};
console.log(generateParenthesis(3));