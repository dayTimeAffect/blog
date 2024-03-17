/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/27
 */
/*
* https://leetcode.cn/problems/reverse-bits-lcci/
* */
/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
    let maxLen = 0, preRecord = 0, flag = false,numStr = num.toString(2)
    if (num > 0 && numStr.length < 32){
        numStr = new Array(32 - numStr.length).fill(0).concat(numStr.split(''))
    }
    if (num < 0){
        numStr = numStr.slice(1).split('')
        numStr = new Array(32 - numStr.length).fill(0).concat(numStr)
        for (let i = 0; i < 32; i ++){
            numStr[i] = numStr[i] == '0' ? '1' : '0'
        }
        let add = 1
        for (let i = 31; i >= 0; i --){
            let tem = parseInt(numStr[i]) + add
            if (tem >= 2){
                numStr[i] = tem - 2
                add = 1
            }else {
                numStr[i] = tem
                add = 0
            }
        }
    }
    for (let i = 0; i < 32; i ++){
        if (numStr[i] == '1'){
            preRecord ++
        }else {
            if (flag === false){
                preRecord ++
            }else {
                preRecord = i - flag
            }
            flag = i
        }
        maxLen = Math.max(maxLen, preRecord)
    }
    return maxLen
};
// console.log(reverseBits(1775));
// console.log(reverseBits(7));
console.log(reverseBits(-24));