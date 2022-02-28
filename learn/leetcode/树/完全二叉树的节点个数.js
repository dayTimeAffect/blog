/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/16
 */
/*
* https://leetcode-cn.com/problems/count-complete-tree-nodes/
* */
var countNodes = function(root) {
    if (!root) return 0
    return 1 + countNodes(root.left) + countNodes(root.right)
};