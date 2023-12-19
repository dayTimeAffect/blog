/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/22
 */
/*
* https://leetcode.cn/problems/minimum-deletions-to-make-array-beautiful/description/?envType=daily-question&envId=2023-11-22
* */
var minDeletion = function(nums) {
    let ans = 0, len = nums.length
    for (let i = 0; i < len; i ++){
        if ((i - ans) % 2 === 0 && nums[i] === nums[i + 1]){
            ans ++
        }
    }
    if ((len - ans) % 2 !== 0) ans ++
    return ans
};