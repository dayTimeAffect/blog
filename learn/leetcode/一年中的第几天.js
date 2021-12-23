/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/21
 */
/*
* https://leetcode-cn.com/problems/day-of-the-year/
* */
var dayOfYear = function(date) {
    let res = 0, dataArr = date.split('-')
    const amount = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((dataArr[0] % 4 === 0 && dataArr[0] % 100 !== 0) || dataArr[0] % 400 === 0)) amount[2] ++
    for (let i = 1; i < dataArr[1]; i ++){
        res += amount[i]
    }
    return res + (dataArr[2] / 1 )
};
console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2019-02-10"));
console.log(dayOfYear("2003-03-01"));
console.log(dayOfYear("2004-03-01"));
console.log(dayOfYear("2019-02-10"));