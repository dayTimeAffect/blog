/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/25
 */
/*
* https://leetcode.cn/problems/complete-binary-tree-inserter/
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
var CBTInserter = function(root) {
    this.root = root
    this.nextNode = []
    const temNode = [root]
    while (temNode.length){
        let node = temNode.shift()
        if (node.left){
            temNode.push(node.left)
        }
        if (node.right){
            temNode.push(node.right)
        }
        if (!node.left || !node.right){
            this.nextNode.push(node)
        }
    }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    const node = { val: val, left: null, right: null }
    const cur = this.nextNode[0]
    if (!this.nextNode[0].left){
        this.nextNode[0].left = node
    } else if (!this.nextNode[0].right){
        this.nextNode[0].right = node
        this.nextNode.shift()
    }
    this.nextNode.push(node)
    return cur.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */