/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/9
 */
/*
* https://leetcode-cn.com/problems/sort-colors/
* */
var sortColors = function(nums) {
    let index = 0
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] === 0){
            [nums[index], nums[i]] = [nums[i], nums[index]]
            index ++
        }
    }
    for (let i = index; i < nums.length; i ++){
        if (nums[i] === 1){
            [nums[index], nums[i]] = [nums[i], nums[index]]
            index ++
        }
    }
    return nums
};
console.log(sortColors([2,0,2,1,1,0]));