/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/30
 */
/*
* https://leetcode.cn/problems/check-balance-lcci/
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
var isBalanced = function(root) {
    const dfs = (root) => {
        if (!root) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
        return Math.max(left, right) + 1
    }
    return dfs(root) !== -1
};