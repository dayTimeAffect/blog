/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/1
 */
/*
* https://leetcode-cn.com/problems/compare-version-numbers/
* */
var compareVersion = function(version1, version2) {
    const tem1 = version1.split('.'), tem2 = version2.split('.')
    let len = Math.max(tem1.length - 1, tem2.length - 1)
    for (let i = 0; i <= len; i ++){
        let num1 = +(tem1[i] || 0)
        let num2 = +(tem2[i] || 0)
        if (num1 > num2){
            return 1
        }else if (num1 < num2){
            return -1
        }
    }
    return 0
};
console.log(compareVersion('1.01', '1.001'));
console.log(compareVersion('1.0', '1.0.0'));
console.log(compareVersion('0.1', '1.1'));
console.log(compareVersion('1.0.1', '1'));
console.log(compareVersion('7.5.2.4', '7.5.3'));