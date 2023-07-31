/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/21
 */
/*
* https://leetcode.cn/problems/kTOapQ/
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
 */
var BSTIterator = function(root) {
    this.root = root
    this.dummyNode = {
        val: -1, left: null, right: null
    };
    let resNode = this.dummyNode
    const handle = (node) => {
        if (!node) return ;
        handle(node.left)
        node.left = null
        resNode.right = node
        resNode = resNode.right
        handle(node.right)
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.dummyNode = this.dummyNode.right
    return this.dummyNode.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !!this.dummyNode.right
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */