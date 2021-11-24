/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/3
 */
/*
* https://leetcode-cn.com/problems/house-robber-iii/
* */
var rob = function(root) {
    // 递归，Math.max(当前节点 + 当前节点的左右子节点的左右子节点， 当前节点的左右子节点)
    if (!root) return 0
    let money = root.val
    if (root.left !== null) money += (rob(root.left.left) + rob(root.left.right))
    if (root.right !== null) money += (rob(root.right.left) + rob(root.right.right))
    return Math.max(money, rob(root.left) + rob(root.right))
};
let hashMap = new Map([[null, 0]])
var rob = function(root) {
    // 优化，记录子节点，避免重复计算
    // 递归，Math.max(当前节点 + 当前节点的左右子节点的左右子节点， 当前节点的左右子节点)
    if (hashMap.has(root)) return hashMap.get(root)
    let money = root.val
    if (root.left !== null) money += (rob(root.left.left) + rob(root.left.right))
    if (root.right !== null) money += (rob(root.right.left) + rob(root.right.right))
    let res = Math.max(money, rob(root.left) + rob(root.right))
    hashMap.set(root, res)
    return res
};
var rob = function(root) {
    // 动态规划
    // dp = [不偷当前节点的最大值，偷当前节点的最大值]
    // 确定终止条件: 当当前节点为null时，无论偷不偷，最大值都为0
    // 当偷当前节点时，子节点不能偷，所以dp[1] = cur.val + 左节点不偷 + 右节点不偷
    // 当不偷当前节点时，子节点最大值无法判断是不是偷，所以dp[0] = Math.max(左节点偷，左节点不偷) + Math.max(右节点偷，右节点不偷)
    // 最后返回 Math.max(dp[0], dp[1])
    const robTree = node => {
        if (node === null) return [0, 0]
        const left = robTree(node.left)
        const right = robTree(node.right)
        return [Math.max(...left) + Math.max(...right),node.val + left[0] + right[0]]
    }
    return Math.max(...robTree(root))
};