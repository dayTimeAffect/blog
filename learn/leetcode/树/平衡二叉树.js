/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/9
 */
var isBalanced = function(root) {
    if (!root) return true
    let flag = true
    const setNodeH = (node) => {
        if (!node) return 0
        node.height = Math.max(setNodeH(node.left), setNodeH(node.right)) + 1
        return node.height
    }
    setNodeH(root)
    let nodeArr = [root]
    while (nodeArr.length){
        const node = nodeArr.pop()
        if (Math.abs((node.left ? node.left.height : 0) - (node.right ? node.right.height : 0)) > 1) return false
        if (node.left) nodeArr.push(node.left)
        if (node.right) nodeArr.push(node.right)
    }
    // console.log(root);
    return flag
};
isBalanced({val: 1, left: null, right: {val: 2, left: null, right: {val: 3, left: null, right: null}}})