/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/8
 */
/*
* https://leetcode.cn/problems/longest-harmonious-subsequence/
* */
var findLHS = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let max = 0, temI = 0, curMaxI
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] - nums[temI] === 1){
            max = Math.max(max, i - temI + 1)
        }
        while (temI <= i && nums[i] - nums[temI] > 1){
            temI ++
        }
    }
    return max
};
console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([1,1,1,1]));