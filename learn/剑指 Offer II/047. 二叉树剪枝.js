/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/8
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if (!root) return root
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    if (root.val || root.left || root.right) return root
    return null
};