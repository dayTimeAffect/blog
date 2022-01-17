/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/27
 */
/*
* https://leetcode-cn.com/problems/add-strings/
* */
var addStrings = function(num1, num2) {
    if (num1 === '0') return num2
    if (num2 === '0') return num1
    let res = [], len = Math.max(num1.length, num2.length)
    for (let i = 0; i < len; i ++){
        let tem = (res[i] || 0) + (num1[num1.length - i - 1] || 0) / 1 + (num2[num2.length - i - 1] || 0) / 1
        console.log(num1[num1.length - i - 1] || 0, num2[num2.length - i - 1] || 0, tem);

        if (tem >= 10) {
            res[i] = tem % 10
            res[i + 1] = Math.floor(tem / 10)
        }else{
            res[i] = tem
        }
    }
    return res.reverse().join('')
};
// console.log(addStrings('456', '77'));
console.log(addStrings('11', '123'));