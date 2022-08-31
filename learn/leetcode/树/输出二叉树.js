/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/22
 */
/*
* https://leetcode.cn/problems/print-binary-tree/
* */
var printTree = function(root) {
    const findHeight = (node, height) => {
        if (!node) return height
        return Math.max(findHeight(node.left, height + 1), findHeight(node.right, height + 1))
    }
    const height = Math.max(findHeight(root, 0) - 1, 0)
    let res = new Array(height + 1).fill(0).map(v => new Array(Math.pow(2, height + 1) - 1).fill(""))
    const fillNodeVal = (node, r, c) => {
        if (node){
            res[r][c] = String(node.val)
        }
        if (node.left){
            fillNodeVal(node.left, r + 1, c - Math.pow(2, height - r - 1))
        }
        if (node.right){
            fillNodeVal(node.right, r + 1, c + Math.pow(2, height - r - 1))
        }
    }
    fillNodeVal(root, 0, (Math.pow(2, height + 1) - 2) / 2)
    return res
};