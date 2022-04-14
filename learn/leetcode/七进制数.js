/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/7
 */
/*
* https://leetcode-cn.com/problems/base-7/
* */
var convertToBase7 = function(num) {
    let res = '', flag = num >= 0 ? '' : '-'
    num = Math.abs(num)
    while (num >= 7){
        let tem = num % 7
        num = (num - tem) / 7
        res = tem + res
    }
    return flag + num + res
};
console.log(convertToBase7(8));
console.log(convertToBase7(9));
console.log(convertToBase7(100));
console.log(convertToBase7(-7));