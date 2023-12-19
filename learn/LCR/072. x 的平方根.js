/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/7
 */
/*
* https://leetcode.cn/problems/jJ0w9p/
* */
var mySqrt = function(x) {
    if (x === 0) return x
    let left = 0, right = x
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        let mid2 = mid * mid
        if (mid2 === x) return mid
        if (mid2 < x){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return right
};
console.log(mySqrt(4));
console.log(mySqrt(6));
console.log(mySqrt(8));
console.log(mySqrt(10));