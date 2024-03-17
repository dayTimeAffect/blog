/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/27
 */
/**
 * @param {number} num
 * @return {string}
 */
var printBin = function(num) {
    let res = '0.'
    for (let i = 0; i < 30; i ++){
        if (num === 0) return res
        num *= 2
        if (num >= 1){
            res += '1'
            num -= 1
        }else {
            res += '0'
        }
    }
    if (num !== 0) return 'ERROR'
    return res
};