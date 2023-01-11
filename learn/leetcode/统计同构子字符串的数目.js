/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/26
 */
/*
* https://leetcode.cn/problems/count-number-of-homogenous-substrings/
* */
var countHomogenous = function(s) {
    const getChildStrSum = (s) => {
        return (s.length * (s.length + 1) / 2) % (Math.pow(10, 9) + 7)
    }
    let res = 0
    let tem = s[0]
    for (let i = 1; i < s.length; i ++){
        if (s[i] === s[i - 1]){
            tem += s[i]
        }else {
            res += getChildStrSum(tem)
            tem = s[i]
        }
    }
    res += getChildStrSum(tem)
    return res % (Math.pow(10, 9) + 7)
};
console.log(countHomogenous("abbcccaa"));


