/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/15
 */
/*
* https://leetcode-cn.com/problems/bulb-switcher/
* */
var bulbSwitch = function(n) {
    // 对每一个灯泡，操作奇数次则灯泡亮着，否则灯泡为关闭
    // 那么就是在n次操作内。对每一个序号的灯泡寻找它的操作次数，即寻找它的因子。因子总是成对出现，但可被平方的数除外，比如4 = 2 * 2；
    // 所以可以被开方的序号灯泡的操作次数为奇数，否则为偶数.
    // Math.floor(Math.sqrt(n)) = n内中可以被开方的数
    return Math.floor(Math.sqrt(n))
};
console.log(bulbSwitch(3));