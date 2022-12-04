/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/12
 */
/*
* https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
* */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let stack = [root], res = [], flag = true
    while (stack.length){
        let temVal = [], temStack = []
        while (stack.length){
            let node = stack.shift()
            node.left && temStack.push(node.left)
            node.right && temStack.push(node.right)
            flag ? temVal.push(node.val) : temVal.unshift(node.val)
        }
        flag = !flag
        res.push(temVal)
        stack = temStack
    }
    return res
};
console.log(zigzagLevelOrder(
    {val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}}
));