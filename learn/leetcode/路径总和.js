/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/6
 */
/*
* https://leetcode-cn.com/problems/path-sum/
* */
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    if (targetSum - root.val === 0 && !root.left && !root.right) return true
    let left = root.left ? hasPathSum(root.left, targetSum - root.val) : false
    let right = root.right ? hasPathSum(root.right, targetSum - root.val) : false
    return left || right
};