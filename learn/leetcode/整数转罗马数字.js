/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/5
 */
/*
* https://leetcode-cn.com/problems/integer-to-roman/
* */
var intToRoman = function(num) {
    let numMap = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }
    let mapArr = Object.keys(numMap).reverse()
    let res = ''
    while (num){
        if (num < mapArr[0]) {
            mapArr.shift()
            continue;
        }
        num = num - mapArr[0]
        res += numMap[mapArr[0]]
    }
    return res
};
console.log(intToRoman(9));