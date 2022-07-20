/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/13
 */
/*
* https://leetcode.cn/problems/kth-largest-element-in-an-array/
* */
var findKthLargest = function(nums, k) {
    const len = nums.length
    let isComplete = true
    for (let i = 0; i < k; i ++){
        isComplete = true
        for (let j = 1; j < (len - i); j ++){
            if (nums[j] < nums[j - 1]){
                isComplete = false;
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            }
        }
        if (isComplete) break;
    }
    return nums[len - k]
};
console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));