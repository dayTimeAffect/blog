/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/27
 */
/*
* https://leetcode.cn/problems/closed-number-lcci/
* */
/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {
    const handle = (numStr, start, end, target1, target2) => {
        let i = start, j = start
        while (i < end && j < end){
            if (numStr[i] === target1 && numStr[j] === target2){
                numStr[i] = target2
                numStr[j] = target1
                i ++
                j ++
                continue;
            }
            if (numStr[i] === target1 && numStr[j] === target1){
                j ++
                continue;
            }
            if (numStr[i] === target2 && numStr[j] === target2){
                i ++
                continue;
            }
            if (numStr[i] === target2 && numStr[j] === target1){
                i ++
                j ++
                continue;
            }
        }
        return parseInt(numStr.join(''), 2)
    }
    if (num === 0) return [-1, -1]
    let maxNum = -1, minNum = -1
    let numStr = num.toString(2)
    if (numStr.length < 31){
        numStr = new Array(31 - numStr.length).fill(0).concat(numStr.split('')).join('')
    }
    if (numStr.indexOf('01') !== -1){
        let index = numStr.lastIndexOf('01')
        let tem = numStr.split('')
        tem[index] = '1'
        tem[index + 1] = '0'
        maxNum = handle(tem, index + 2, 31, '0', '1')
    }
    if (numStr.indexOf('10') !== -1){
        let index = numStr.lastIndexOf('10')
        let tem = numStr.split('')
        tem[index] = '0'
        tem[index + 1] = '1'
        minNum = handle(tem, index + 2, 31, '1', '0')
    }
    return [maxNum, minNum]
};
console.log(findClosedNumbers(2147483647));
