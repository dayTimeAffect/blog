/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/28
 */
/*
* https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null
    if (inorder.length === 1) return {val: inorder[0], left: null, right: null}
    let root = postorder[postorder.length - 1]
    for (let i = 0; i < inorder.length; i ++){
        if (inorder[i] === root){
            return {
                val: root,
                left: buildTree(inorder.slice(0, i), postorder.slice(0, i)),
                right: buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1))
            }
        }
    }
};