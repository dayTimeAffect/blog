/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/11
 */
/*
* https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
* */
// 左子树 -> 根节点 -> 右子树
/*var inorderTraversal = function(root) {
    // 递归算法
    let res = []
    if (!root) return res
    if (root.left) res.push(...inorderTraversal(root.left))
    res.push(root.val)
    if (root.right) res.push(...inorderTraversal(root.right))
    return res
};*/
var inorderTraversal = function(root) {
    // 迭代算法
    let res = []
    let stack = []
    while (root || stack.length !== 0){
        while (root){
            stack.push(root)
            root = root.left
        }
        let node = stack.pop()
        res.push(node.val)
        root = node.right
    }
    return res
};
console.log(inorderTraversal({val: 1, left: null, right: {val: 2, left: null, right: null}}));