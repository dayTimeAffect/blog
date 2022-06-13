/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/31
 */
/*
* https://leetcode.cn/problems/multiply-strings/
* */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    if (num1 === '1') return num2
    if (num2 === '1') return num1
    let len1 = num1.length, len2 = num2.length, res = []
    let arr1 = num1.split('').reverse(), arr2 = num2.split('').reverse()
    let next = 0, cur = 0
    for (let i = 0; i < len1; i ++){
        for (let j = 0; j < len2; j ++){
            let tem = arr1[i] * arr2[j] + next
            cur = tem % 10
            next = (tem - cur) / 10
            if (!res[i + j]) res[i + j] = 0
            if (res[i + j] + cur >= 10){
                res[i + j] = res[i + j] + cur - 10
                next ++
            }else{
                res[i + j] = res[i + j] + cur
            }
        }
        if (next){
            res.push(1)
            next = 0
        }
    }
    return res.reverse().join('')
};
// console.log(multiply('2', '3'));
console.log(multiply('123', '456'));