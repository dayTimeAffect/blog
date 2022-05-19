/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/19
 */
/*
* https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/
* */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    let tem = nums[Math.floor(nums.length / 2)]
    return Math.floor(nums.reduce((sum, next) => sum + Math.abs(tem - next), 0))
};
console.log(minMoves2([1,10,2,9]));
console.log(minMoves2([1,0,0,8,6]));