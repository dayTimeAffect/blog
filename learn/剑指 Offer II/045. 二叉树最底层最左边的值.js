/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/29
 */
/*
* https://leetcode.cn/problems/LwUNpT/
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
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let maxHeight = 0, res = root.val
    const find = (root, height) => {
        if (height > maxHeight){
            maxHeight = height
            res = root.val
        }
        if (root.left){
            find(root.left, height + 1)
        }
        if (root.right){
            find(root.right, height + 1)
        }
    }
    find(root, 0)
    return res
};
