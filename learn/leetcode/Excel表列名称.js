/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/29
 */
/*
* https://leetcode-cn.com/problems/excel-sheet-column-title/
* */
var convertToTitle = function(columnNumber) {
    let res = ''
    while (columnNumber){
        let curNumber = columnNumber % 26 ? columnNumber % 26 : 26
        res = String.fromCharCode(curNumber + 64) + res
        columnNumber = (columnNumber - curNumber) / 26
    }
    return res
};
console.log(convertToTitle(701));