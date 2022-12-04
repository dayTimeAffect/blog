/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/27
 */
/*
* https://leetcode.cn/problems/sign-of-the-product-of-an-array/
* */
var arraySign = function(nums) {
    return nums.reduce((next, cur) => {
        if (!next || !cur) return 0
        return cur > 0 ? next : -next
    }, 1)
};
console.log(arraySign([1,2,0,4]));