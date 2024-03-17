/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/4
 */
/*
* https://leetcode.cn/problems/exchange-lcci/
* */
/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
    let tem = num.toString(2).split('')
    if (tem.length % 2 === 1) tem.unshift('0')
    for (let i = 0; i < tem.length; i += 2){
        let tem1 = tem[i]
        tem[i] = tem[i + 1]
        tem[i + 1] = tem1
    }
    return parseInt(tem.join(''), 2)
};