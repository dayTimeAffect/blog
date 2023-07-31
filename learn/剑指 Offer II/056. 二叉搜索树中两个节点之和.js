/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/29
 */
/*
* https://leetcode.cn/problems/opLdQZ/
* */
var findTarget = function(root, k) {
    const nodeValueMap = {}
    let flag = false
    const inorderTraversal = (node) => {
        if (node.left) inorderTraversal(node.left)
        if(nodeValueMap[k - node.val]) {
            flag = true;
            return;
        }
        nodeValueMap[node.val] = true
        if (node.right) inorderTraversal(node.right)
    }
    inorderTraversal(root)
    return flag
};