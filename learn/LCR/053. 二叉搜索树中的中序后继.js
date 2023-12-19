/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/21
 */
/*
* https://leetcode.cn/problems/P5rCT8/
* */
var inorderSuccessor = function(root, p) {
    const getNodeLeft = (node) => {
        let res = node
        let cur = node.left
        while (cur){
            res = cur
            cur = cur.left
        }
        return res
    }
    const handle = (node, prev) => {
        if (!node) return null
        if (node === p) {
            if (node.right) return getNodeLeft(node.right)
            return prev
        }
        return handle(node.left, node) || handle(node.right, prev)
    }
    return handle(root, null)
};