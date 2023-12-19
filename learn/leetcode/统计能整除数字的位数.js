/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/26
 */
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let flag = 0, stringNum = String(num)
    for (let i = 0; i < stringNum.length; i ++){
        if (num % stringNum[i] === 0) flag ++
    }
    return flag
};
