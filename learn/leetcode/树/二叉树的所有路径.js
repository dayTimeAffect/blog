/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/7
 */
/*
* https://leetcode-cn.com/problems/binary-tree-paths/
* */
var binaryTreePaths = function(root) {
    const res = []
    const dfs = (node, pre) => {
        if (!node.left && !node.right){
            return res.push(pre)
        }
        node.left && dfs(node.left, pre + '->' + node.left.val)
        node.right && dfs(node.right, pre + '->' + node.right.val)
    }
    dfs(root, root.val + '')
    return res
};
console.log(binaryTreePaths({val: 1, left: {val: 2, left: null, right: {val: 5, left: null, right: null}}, right: {val: 3, left: null, right: null}}));