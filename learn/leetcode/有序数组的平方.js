/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/22
 */
/*
* https://leetcode-cn.com/problems/squares-of-a-sorted-array/
* */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1
    let res = []
    while (left <= right){
        if (Math.abs(nums[left]) < Math.abs(nums[right])){
            res.push(Math.pow(nums[right], 2))
            right --
        }else{
            res.push(Math.pow(nums[left], 2))
            left ++
        }
    }
    return res.reverse()
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));