/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/6
 */
/*
* https://leetcode.cn/problems/evaluate-boolean-binary-tree/
* */
var evaluateTree = function(root) {
    if (!root) return false
    if (!root.left && !root.right) return Boolean(root.val)
    if (root.val === 2){
        return evaluateTree(root.left) || evaluateTree(root.right)
    }else if (root.val === 3){
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
};