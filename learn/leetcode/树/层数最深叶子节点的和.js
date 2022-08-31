/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/28
 */
/*
* https://leetcode-cn.com/problems/deepest-leaves-sum/
* */
var deepestLeavesSum = function(root) {
    let tier = [root], res = 0
    while (tier.length){
        let temNode = []
        res = 0
        while (tier.length){
            let node = tier.shift()
            if (!node.left && !node.right){
                res += node.val
            }
            if (node.left) temNode.push(node.left)
            if (node.right) temNode.push(node.right)
        }
        tier = temNode
    }
    return res
};
var deepestLeavesSum = function(root) {
    let maxC = 0, res = 0
    const dfs = (node, c) => {
        if (c > maxC){
            res = 0
            maxC = c
        }
        if (c === maxC){
            res += node.val
        }
        if (node.left){
            dfs(node.left, c + 1)
        }
        if (node.right){
            dfs(node.right, c + 1)
        }
    }
    dfs(root, 0)
    return res
};