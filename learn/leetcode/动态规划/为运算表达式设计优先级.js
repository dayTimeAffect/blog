/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/5
 */
/*
* https://leetcode.cn/problems/different-ways-to-add-parentheses/
* */
var diffWaysToCompute = function(expression) {
    let res = [], flag = false
    for (let i = 0; i < expression.length; i ++){
        if (['+', '-', '*'].includes(expression[i])){
            flag = true
            let left = diffWaysToCompute(expression.substring(0, i))
            let right = diffWaysToCompute(expression.substring(i + 1))
            for (let l_v of left){
                for (let r_v of right){
                    if (expression[i] === '+'){
                        res.push(l_v + r_v)
                    }
                    if (expression[i] === '-'){
                        res.push(l_v - r_v)

                    }
                    if (expression[i] === '*'){
                        res.push(l_v * r_v)
                    }
                }
            }
        }
    }
    if (!flag) res.push(+expression)
    return res
};
console.log(diffWaysToCompute('2*3-4*5'));