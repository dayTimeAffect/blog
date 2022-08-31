/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/30
 */
/*
* https://leetcode.cn/problems/maximum-binary-tree/
* */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) return null
    let max = nums[0], maxIndex = 0, len = nums.length
    for (let i = 1; i < len; i ++){
        if (nums[i] > max){
            max = nums[i]
            maxIndex = i
        }
    }
    const left = nums.slice(0, maxIndex)
    const right = nums.slice(maxIndex + 1)
    return ({val: max, left: constructMaximumBinaryTree(left), right: constructMaximumBinaryTree(right)})
};
var constructMaximumBinaryTree = function(nums) {
    //单调栈
    if (nums.length === 0) return null
    const createNode = (val, left, right) => ({val, left, right})
    const len = nums.length, stack = []
    for (let i = 0; i < len; i ++){
        let node = createNode(nums[i], null, null)
        while (1){
            let temNode = stack.pop()
            if (!temNode){
                stack.push(node)
                break;
            } else if (temNode.val > nums[i]){
                temNode.right = node
                stack.push(temNode, node)
                break;
            } else {
                node.left = temNode
            }
        }
    }
    return stack[0]
};
console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));