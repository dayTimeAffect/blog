/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/19
 */
/*
* https://leetcode.cn/problems/check-subtree-lcci/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
// 检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。
// 如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。
var checkSubTree = function(t1, t2) {
    // 节点数多，考虑从满足的层开始遍历
    if (!t1 && !t2) return true
    const getTierHeight = (node, height = 0) => {
        if (!node) return height
        return Math.max(getTierHeight(node.left, height + 1), getTierHeight(node.right, height + 1))
    }
    const isSame = (node1, node2) => {
        if (!node1 && !node2) return true
        if (!node1 || !node2) return false
        if (node1.val !== node2.val) return false
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
    }
    const dfsGetTier = (node, targetTier) => {
        let res = []
        const dfs = (node) => {
            const curHeight = Math.max(node.left ? dfs(node.left) : 0, node.right ? dfs(node.right) : 0) + 1
            if (curHeight === targetTier){
                res.push(node)
            }
            return curHeight
        }
        dfs(node)
        return res
    }
    const t2Height = getTierHeight(t2)
    const t1Tier = dfsGetTier(t1, t2Height)
    for (let i = 0; i < t1Tier.length; i ++){
        if (isSame(t1Tier[i], t2)) return true
    }
    return false
};
console.log(checkSubTree(
    {val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}},
    {val: 2, left: null, right: null}
));