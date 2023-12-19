/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/6
 */
/*
* https://leetcode.cn/problems/legal-binary-search-tree-lcci/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node, min, max) => {
        if (node === null) return true
        if (node.val >= max || node.val <= min) return false
        if (node.left && node.left.val >= node.val) return false
        if (node.right && node.right.val <= node.val) return false
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }
    return dfs(root, -Infinity, Infinity)
};