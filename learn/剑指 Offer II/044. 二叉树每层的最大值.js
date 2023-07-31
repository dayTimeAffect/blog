/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/29
 */
/*
* https://leetcode.cn/problems/hPov7L/
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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return []
    let nodeArr = [root], res = []
    while (nodeArr.length){
        let tem = [], curMax = -Infinity
        for (let node in nodeArr){
            if (node.val > curMax) curMax = node.val
            if (node.left){
                tem.push(node.left)
            }
            if (node.right){
                tem.push(node.right)
            }
        }
        nodeArr = tem
        res.push(curMax)
    }
    return res
};