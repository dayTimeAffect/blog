/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/21
 */
var pathSum = function(root, targetSum) {
    if (!root) return []
    let res = []
    const findPath = (node, sum, path) => {
        if (node.left === null && node.right === null && (sum + node.val === targetSum)) res.push([...path, node.val])
        if (node.left) findPath(node.left, sum + node.val, [...path, node.val])
        if (node.right) findPath(node.right, sum + node.val, [...path, node.val])
    }
    findPath(root, 0, [])
    return res
};
var pathSum = function(root, targetSum) {
    if (!root) return []
    let res = [], tem = [root.val]
    const findPath = (node, sum) => {
        if (sum === targetSum && !node.left && !node.right) return res.push([...tem])
        if (node.left) {
            tem.push(node.left.val)
            findPath(node.left, sum + node.left.val)
            tem.pop()
        }
        if (node.right) {
            tem.push(node.right.val)
            findPath(node.right, sum + node.right.val)
            tem.pop()
        }
    }
    findPath(root, root.val)
    return res
};
pathSum([],1)