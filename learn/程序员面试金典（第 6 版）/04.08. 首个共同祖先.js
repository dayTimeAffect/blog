/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/12
 */
/*
* https://leetcode.cn/problems/first-common-ancestor-lcci/
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let flag = false, res = null
    const dfs = (node) => {
        if (flag) return false
        let temL = node.left ? dfs(node.left) : false, temR = node.right ? dfs(node.right) : false
        if ((temL && temR) || ((node === p || node === q) && (temL || temR))){
            flag = true
            res = node
        }
        return node === p || node === q || temL || temR
    }
    dfs(root)
    return res
};