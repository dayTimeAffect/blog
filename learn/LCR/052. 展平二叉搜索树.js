/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/15
 */
/*
* https://leetcode.cn/problems/NYBBNL/
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const dummyNode = {
        val: -1, left: null, right: null
    };
    let resNode = dummyNode
    const handle = (node) => {
        if (!node) return ;
        handle(node.left)
        node.left = null
        resNode.right = node
        resNode = resNode.right
        handle(node.right)
    }
    handle(root, null)
    return dummyNode.right
};
console.log(increasingBST({
    val: 3, left: {
        val: 2, left: {
            val: 1, left: null, right: null
        },
        right: null,
    },
    right: {
        val: 4, left: null, right: null
    }
}));