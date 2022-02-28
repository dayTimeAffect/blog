/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/15
 */
/*
* https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
* */
var averageOfLevels = function(root) {
    const tierNode = [], tierNodeSum = []
    const dfs = (node, index) => {
        if (!node) return;
        tierNode[index] = (tierNode[index] || 0) + 1
        tierNodeSum[index] = (tierNodeSum[index] || 0) + node.val
        if (node.left) dfs(node.left, index + 1)
        if (node.right) dfs(node.right, index + 1)
    }
    dfs(root, 0)
    return tierNodeSum.map((v, i) => v / tierNode[i])
};
