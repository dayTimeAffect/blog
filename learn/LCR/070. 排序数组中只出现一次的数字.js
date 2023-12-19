/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/31
 */
/*
* https://leetcode.cn/problems/skFtm2/description/
* */
var singleNonDuplicate = function(nums) {
    //任何数和本身异或都为0
    return nums.reduce((next, cur) => next ^ cur, 0)
};
var singleNonDuplicate = function(nums) {
    //任何数和本身异或都为0
    return nums.reduce((next, cur) => next ^ cur, 0)
};