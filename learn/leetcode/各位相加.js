/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/7
 */
/*
* https://leetcode-cn.com/problems/add-digits/
* */
var addDigits = function(num) {
    if (num <= 9) return num
    return addDigits(String(num).split('').reduce((sum, cur) => sum + Number(cur), 0))
};
console.log(addDigits(9));