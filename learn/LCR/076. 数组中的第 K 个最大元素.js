/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/14
 */
/*
* https://leetcode.cn/problems/xx4gT2/
* */
var findKthLargest = function(nums, k) {
    for (let i = 0; i < k; i ++){
        for(let j = i + 1; j < nums.length; j ++){
            if (nums[i] < nums[j]){
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums[k - 1]
};