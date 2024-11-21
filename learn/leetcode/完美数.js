/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/4
 */
/*
* https://leetcode.cn/problems/perfect-number/description/
* */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    let res = 1
    for (let i = 2; i * i <= num; i ++){
        if (num % i === 0){
            res += i
            if (i * i < num) {
                res += Math.floor(num / i);
            }
        }
    }
    return res === num
};
console.log(checkPerfectNumber(28));