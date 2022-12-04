/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/12
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null
    let head = preorder[0], headIndex = inorder.indexOf(head)
    let left = buildTree(preorder.slice(1, 1 + headIndex), inorder.slice(0, headIndex))
    let right = buildTree(preorder.slice(1 + headIndex), inorder.slice(headIndex + 1))
    return ({ val: head, left, right })
};
var buildTree = function(preorder, inorder) {
    let map = {}, len = preorder.length
    for (let i = 0; i < inorder.length; i ++){
        map[inorder[i]] = i
    }
    const createTree = (leftStart, leftEnd, rightStart, rightEnd) => {
        if (leftStart > leftEnd) return null
        let head = preorder[leftStart]
        const nodeIndex = map[head]
        const size_left_subTree = nodeIndex - rightStart
        let left = createTree(leftStart + 1, leftStart + size_left_subTree, rightStart, nodeIndex - 1)
        let right = createTree(leftStart + size_left_subTree + 1, leftEnd, nodeIndex + 1, rightEnd)
        return ({val: head, left, right})
    }

    return createTree(0, len - 1, 0, len - 1)
};

console.log(buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7]));
// console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
// console.log(buildTree([3], [3]));