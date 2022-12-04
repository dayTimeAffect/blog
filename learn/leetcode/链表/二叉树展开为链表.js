/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/14
 */
/*
* https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
* */
var flatten = function(root) {
    // 递归
    if (!root) return root
    let res = root
    let left = root.left, right = root.right
    root.left = null
    root.right = null
    if (left){
        root.right = flatten(left)
        while (root.right){
            root = root.right
        }
    }
    if (right){
        root.right = flatten(right)
    }
    return res
};