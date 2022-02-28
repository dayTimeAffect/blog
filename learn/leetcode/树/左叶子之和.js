/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/21
 */
/*
* https://leetcode-cn.com/problems/sum-of-left-leaves/
* */
var sumOfLeftLeaves = function(root) {
    if (!root || (!root.left && !root.right)) return 0
    let resNode = [], temNode = [root]
    while (temNode.length){
        let node = temNode.shift()
        if (node.left){
            if (!node.left.left && !node.left.right) resNode.push(node.left)
            else temNode.push(node.left)

        }
        if (node.right) temNode.push(node.right)
    }
    return resNode.reduce((sum, cur) => sum + cur.val, 0)
};