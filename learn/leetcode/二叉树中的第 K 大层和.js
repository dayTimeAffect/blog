/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree/description/?envType=daily-question&envId=Invalid%20Date
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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const levelSum = [], tempNode = [root]
    while (tempNode.length){
        let len = tempNode.length, sum = 0, temp = []
        for (let i = 0; i < len; i ++){
            let node = tempNode.shift()
            sum += node.val
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        }
        levelSum.push(sum)
        tempNode.push(...temp)
    }
    levelSum.sort((a, b) => b - a)
    return k > levelSum.length ? -1 : levelSum[k - 1]
};