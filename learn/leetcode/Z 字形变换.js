/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/27
 */
/*
* https://leetcode-cn.com/problems/zigzag-conversion/
* */
/*var convert = function(s, numRows) {
    if (numRows === 1) return s
    let resArr = []
    let res = ''
    for (let i = 0; i < numRows; i ++) resArr.push([])
    let col = 0, lin = -1;
    for (let i = 0; i < s.length; i ++){
        if (lin < (numRows - 1) && col % (numRows - 1) === 0){
            lin ++
        }else if (lin === (numRows - 1) || col % (numRows - 1) !== 0){
            lin --
            col ++
        }
        // 减少每行长度， 此时col用于判断lin运动的方向
        resArr[lin].push(s[i])
        // resArr[lin][col] = s[i]
    }
    for (let i = 0; i < resArr.length; i ++){
        for (let j = 0; j < resArr[i].length; j ++){
            res += resArr[i][j] || ''
        }
    }
    return res
};*/
// 优化做法, 使用字符串减少空间使用
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let resArr = []
    let col = 0, lin = -1;
    for (let i = 0; i < s.length; i ++){
        if (lin < (numRows - 1) && col % (numRows - 1) === 0){
            lin ++
        }else if (lin === (numRows - 1) || col % (numRows - 1) !== 0){
            lin --
            col ++
        }
        // 减少每行长度， 此时col用于判断lin运动的方向
        resArr[lin] = (resArr[lin] || '') + s[i]
    }
    return resArr.join('')
};
console.log(convert('PAYPALISHIRING', 4));