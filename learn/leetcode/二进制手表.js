/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/21
 */
/*
* https://leetcode-cn.com/problems/binary-watch/
* */
var readBinaryWatch = function(turnedOn) {
    let res = [];
    if (turnedOn >= 9) return res
    let numBinaryGetOne = {}
    for (let h = 0; h < 12; h ++){
        for (let m = 0; m < 60; m ++){
            if (BinaryGetOne(h, numBinaryGetOne) + BinaryGetOne(m, numBinaryGetOne) === turnedOn) res.push(timeHandle(h, m))
        }
    }
    return res
};
var BinaryGetOne = function (num, numBinaryGetOne) {
    if (numBinaryGetOne[num]) return numBinaryGetOne[num]
    let numStr = Number(num).toString(2)
    let res = 0
    for (let i = 0; i < numStr.length; i ++){
        if (numStr[i] === '1') res ++
    }
    numBinaryGetOne[num] = res
    return res
}
var timeHandle = function (h, m) {
    if (h > 11) return null
    if (m > 59) return null
    return `${h}:${(Array(2).join('0') + m).slice(-2)}`
}
console.log(readBinaryWatch(8));