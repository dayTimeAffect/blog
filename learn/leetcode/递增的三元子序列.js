/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/21
 */
/*
* https://leetcode.cn/problems/increasing-triplet-subsequence/
* */
var increasingTriplet = function(nums) {
    if (nums.length <= 2) return false
    let a = nums[0], b = Infinity
    for (let i = 1; i < nums.length; i ++){
        const num = nums[i]
        if (num > b){
            return true
        }else if (num > a){
            b = num
        }else {
            a = num
        }
    }
    return false
};
// console.log(increasingTriplet([2,1,5,0,4,6]));
console.log(increasingTriplet([20,100,10,12,5,13]));