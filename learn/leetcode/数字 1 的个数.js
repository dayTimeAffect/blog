/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/13
 */
/*
* https://leetcode-cn.com/problems/number-of-digit-one/
* */
var countDigitOne = function(n) {
    // 可以类比为一个密码盘。假设固定个位为1，其他所有位的组合 + 固定十位为1，其他位的所有组合 ...
    // 真实数字中，由于每一位与1对比的大小范围，会影响到最终结果
    if (n <= 1) return n
    let count = 0
    let strN = String(n)
    let len = strN.length
    let digit = 1
    for (let i = len - 1; i >= 0; i --){
        let high = +(strN.substr(0, i) || 0)
        let low = +(strN.substr(i + 1) || 0)
        if (strN[i] / 1 > 1){
            count += high * digit + digit
        }else if (strN[i] / 1 === 1){
            count += high * digit + low + 1
        }else{
            count += high * digit
        }
        digit *= 10
    }
    return count
};
console.log(countDigitOne(99));