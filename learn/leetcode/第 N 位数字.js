/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/17
 */
/*
* https://leetcode-cn.com/problems/nth-digit/
* */
var findNthDigit = function(n) {
    if (n < 10) return n
    let maxIndex = 9, len = 1
    while (maxIndex < n){
        len ++
        maxIndex += (len * 9 * Math.pow(10, len - 1))
    }
    let startNum = Math.pow(10, len - 1), startIndex = maxIndex - (len * 9 * Math.pow(10, len - 1))
    let addNum = Math.floor((n - (startIndex + 1)) / len)
    let index = (n - (startIndex + 1)) % len
    return (startNum + addNum + '')[index]
};
// console.log(findNthDigit(88888));
// console.log(99909 - (9 * Math.pow(10, 4)));
console.log(findNthDigit(11));
console.log(findNthDigit(12));
console.log(findNthDigit(13));
console.log(findNthDigit(15));
