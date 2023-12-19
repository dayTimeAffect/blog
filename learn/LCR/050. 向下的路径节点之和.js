/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/15
 */
/*
* https://leetcode.cn/problems/6eUYwP/
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let res = 0
    const handle = (node, sumVal) => {
        if (!node) return;
        sumVal.push(0)
        for (let i = 0; i < sumVal.length; i ++){
            sumVal[i] += node.val
            if (sumVal[i] === targetSum) res ++
        }
        if (node.left) handle(node.left, [...sumVal])
        if (node.right) handle(node.right, [...sumVal])
    }
    handle(root, [])
    return res
};