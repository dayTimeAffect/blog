/**
 * @Author: dayTimeAffect
 * @Date: 2024/9/19
 */
/*
* https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/?envType=study-plan-v2&envId=top-interview-150
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
    let res = 0
    const handle = (pre, node) =>{
        let cur = pre + node.val, flag = true
        if (node.left){
            flag = false
            handle(cur, node.left)
        }
        if (node.right){
            flag = false
            handle(cur, node.right)
        }
        if (flag){
            res += Number(cur)
        }
    }
    handle('', root)
    return res
};