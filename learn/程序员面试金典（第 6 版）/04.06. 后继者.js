/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/6
 */
/*
* https://leetcode.cn/problems/successor-lcci/
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    // 中序遍历
    let flag = false, res = null
    const dfs = (root) => {
        if (!root) return
        dfs(root.left)
        if (flag && !res) res = root
        if (root === p) flag = true
        dfs(root.right)
        if (flag) return
    }
    dfs(root)
    return res
};