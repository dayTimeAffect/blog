/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/13
 */
/*
* https://leetcode-cn.com/problems/first-bad-version/
* */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n
        while (left <= right){
            if (left === right) return left
            let mid = left + Math.floor((right - left) / 2)
            if (isBadVersion(mid)){
                right = mid
            }else{
                left = mid + 1
            }
        }
    };
};
solution((n) => n === 4)(5)
