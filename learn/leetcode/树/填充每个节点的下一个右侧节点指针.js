/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/21
 */
/*
* https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
* */
var connect = function(root) {
    if (!root) return root
    let temNode = [root]
    while (temNode.length){
        let tier = [...temNode]
        temNode = []
        while (tier.length > 0){
            let node = tier.shift()
            node.next = tier[0] || null
            if (node.left) temNode.push(node.left)
            if (node.right) temNode.push(node.right)
        }
    }
    return root
};