/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/29
 */
/*
* https://leetcode.cn/problems/7WqeDu/
* */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k === 0 || nums.length < 2) return false
    let i = 0, j = 0;
    while (j < nums.length){
        j ++
        if (j - i > k){
            i ++
        }
        for (let m = i; m < j; m ++){
            if (Math.abs(nums[j] - nums[m]) <= t){
                return true
            }
        }
    }
    return false
};
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 4));