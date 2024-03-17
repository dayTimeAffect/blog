/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/peaks-and-valleys-lcci/description/
* */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const flag = nums[0] < nums[1] // true 为谷 峰 谷 ，false 为峰 谷 峰
    for (let i = 1; i < nums.length; i ++){
        if (i % 2 === 1){
            // flag 为 true 时 - 谷，false 时 - 峰
            if (flag && nums[i] > nums[i - 1]){
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
            }else if (!flag && nums[i] < nums[i - 1]){
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
            }
        }else {
            // flag 为 true 时 - 峰，false 时 - 谷
            if (flag && nums[i] < nums[i - 1]){
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
            }else if (!flag && nums[i] > nums[i - 1]){
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
            }
        }
    }
    return nums
};
console.log(wiggleSort([3, 5, 2, 1, 6, 4]));