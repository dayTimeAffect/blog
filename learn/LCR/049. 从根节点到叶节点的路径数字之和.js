/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/8
 */
/*
* https://leetcode.cn/problems/3Etpl5/
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
var sumNumbers = function(root) {
    let resStrArr = []
    const backtrack = (root, cur) => {
        let tem = cur + root.val
        if (root.left || root.right){
            if (root.left) backtrack(root.left, tem)
            if (root.right) backtrack(root.right, tem)
        }else {
            resStrArr.push(tem)
        }
    }
    backtrack(root, '')
    return resStrArr.reduce((sum, cur) => sum + Number(cur), 0)
};