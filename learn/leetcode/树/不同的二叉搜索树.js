/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/21
 */
/*
* https://leetcode-cn.com/problems/unique-binary-search-trees/
* */
let dp = [1, 1]
var numTrees = function(n) {
    // 由于从1到n连续的n个节点组成不同二叉搜索树可以分为
    // 由1为根节点，右子树2-n个节点 + 由2为根节点，左字数为1个节点，右字数为n-2个节点 + 由3为根节点，左子树为 3-1个节点，右子树为 n-3 个节点
    if (dp[n]) return dp[n]
    let res = 0
    for (let i = 1; i <= n; i ++){
        res += numTrees(i - 1) * numTrees(n - i)
    }
    dp[n] = res
    return res
};
console.log(numTrees(20));