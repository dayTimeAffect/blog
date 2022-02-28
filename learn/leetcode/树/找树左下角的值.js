/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/21
 */
/*
* https://leetcode-cn.com/problems/find-bottom-left-tree-value/
* */
var findBottomLeftValue = function(root) {
    let temNode = [root], node = root
    while (temNode.length){
        node = temNode.shift()
        if (node.right) temNode.push(node.right)
        if (node.left) temNode.push(node.left)
    }
    return node.val
};