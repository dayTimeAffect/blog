/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/9
 */
var minDepth = function(root) {
    if (!root) return 0
    let nodeArr = [root]
    let index = 1
    while (nodeArr.length){
        let temArr = []
        while (nodeArr.length){
            let node = nodeArr.pop()
            if (!node.left && !node.right) return index
            if (node.left) temArr.push(node.left)
            if (node.right) temArr.push(node.right)
        }
        index ++
        nodeArr = temArr
    }
    return index
};