/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/13
 */
/*
* https://leetcode.cn/problems/maximum-swap/
* */
var maximumSwap = function(num) {
    if (num < 10) return num
    let numArr = String(num).split('')
    let len = numArr.length, curI = 0
    while (curI < len){
        let maxI = curI
        for (let i = curI; i < len; i ++){
            if (numArr[i] >= numArr[maxI]){
                maxI = i
            }
        }
        if (numArr[maxI] === numArr[curI]){
            curI ++
        }else {
            let tem = numArr[curI]
            numArr[curI] = numArr[maxI]
            numArr[maxI] = tem
            return Number(numArr.join(''))
        }
    }
    return num
};
console.log(maximumSwap(2736));