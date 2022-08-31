/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/10
 */
/*
* https://leetcode.cn/problems/solve-the-equation/
* */
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let x_c = 0, v = 0, tem = '', flag = 1
    for (let i = 0; i <= equation.length; i ++){
        if (equation[i] === 'x'){
            if (tem[0] === '+'){
                x_c += ((tem.substr(1) || 1) / flag)
            }else if (tem[0] === '-'){
                x_c += ((tem.substr(1) || 1) / -flag)
            }else {
                x_c += ((tem || 1) / flag)
            }
            tem = ''
            continue;
        }
        if (equation[i] === '+' || equation[i] === '-'){
            v += ((tem || 0) / (-flag))
            tem = equation[i]
            continue;
        }
        if (equation[i] === '=' || i === equation.length){
            v += ((tem || 0) / (-flag))
            flag = -1
            tem = ''
            continue;
        }
        tem += equation[i]
    }
    console.log(x_c, v);
    if (x_c === 0 && v === 0){
        return 'Infinite solutions'
    }
    if (x_c === 0 && v !== 0){
        return 'No solution'
    }
    return 'x=' + v / x_c
};
// console.log(solveEquation('x+5-3+x=6+x-2'));
// console.log(solveEquation('x=x'));
console.log(solveEquation('2x+3x-6x=x+2'));