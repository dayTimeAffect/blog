/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/4
 */
/*
* https://leetcode.cn/problems/sum-in-a-matrix/
* */
var matrixSum = function(nums) {
    let res = 0
    for (let i = 0; i < nums.length; i ++){
        nums[i] = nums[i].sort((a, b) => b - a)
    }
    for (let i = 0; i < nums[0].length; i ++){
        for (let m = nums.length - 1; m > 0; m --){
            if (nums[m][i] > nums[m - 1][i]){
                [nums[m][i], nums[m - 1][i]] = [nums[m - 1][i], nums[m][i]]
            }
        }
        res += nums[0][i]
    }
    return res
};
console.log(matrixSum([[7,2,1],[6,4,2],[6,5,3],[3,2,1]]));