/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/17
 */
/*
* https://leetcode-cn.com/problems/guess-number-higher-or-lower/
* */
const guess = (n) => {
    if (1702766719 > n) return 1
    if (1702766719 < n) return -1
    if (1702766719 === n) return 0
}
var guessNumber = function(n) {
    let left = 1, right = n, mid = Math.floor((1 + n) / 2)
    let flag = guess(mid)
    while (flag !== 0){
        if (flag < 0){
            right = mid
        }
        if (flag > 0){
            left = mid + 1
        }
        mid = Math.floor((left + right) / 2)
        flag = guess(mid)
    }
    return mid
};
console.log(guessNumber(2126753390));