/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/30
 */
/*
* https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
* */
var preorderTraversal = function(root) {
    //递归算法
    let res = []
    if (!root) return res
    res.push(root.val)
    if (root.left) res.push(...preorderTraversal(root.left))
    if (root.right) res.push(...preorderTraversal(root.right))
    return res
};
var preorderTraversal = function(root) {
    //迭代算法
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length > 0){
        let tem = stack.pop()
        res.push(tem.val)
        if (tem.right) stack.push(tem.right)
        if (tem.left) stack.push(tem.left)

    }
    return res
};