/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/22
 */
/*
* https://leetcode.cn/problems/2VG8Kg/
* */
var minSubArrayLen = function(target, nums) {
    let tem = 0, res = Infinity
    for (let i = 0, j = 0; j < nums.length; j ++){
        tem += nums[j]
        while (tem >= target && i <= j){
            res = Math.min(res,  j - i + 1)
            tem -= nums[i]
            i ++
        }
    }
    return res === Infinity ? 0 : res
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(1, [1, 4, 4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));