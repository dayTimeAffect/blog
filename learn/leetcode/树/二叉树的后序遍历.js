/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/30
 */
/*
* https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
* */
var postorderTraversal = function(root) {
    // 递归算法
    let res = []
    if (!root) return res
    if (root.left) res.push(...postorderTraversal(root.left))
    if (root.right) res.push(...postorderTraversal(root.right))
    res.push(root.val)
    return res
};
var postorderTraversal = function(root) {
    // 迭代算法
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length > 0){
        let node = stack.pop()
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
        res.unshift(node.val)
    }
    return res
};