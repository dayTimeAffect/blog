/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/30
 */
/*
* https://leetcode-cn.com/problems/excel-sheet-column-number/
* */
var titleToNumber = function(columnTitle) {
    let res = 0
    let n = columnTitle.length - 1
    for (let i = 0; i <= n; i ++){
        res += (columnTitle.charCodeAt(n - i) - 64) * Math.pow(26, i)
    }
    return res
};
console.log(titleToNumber('A'));