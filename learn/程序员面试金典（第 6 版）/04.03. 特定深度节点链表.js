/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/6
 */
/*
* https://leetcode.cn/problems/list-of-depth-lcci/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    // 广度优先遍历
    const bfs = (root) => {
        if (!root) return []
        let res = [], stack = [root]
        while (stack.length){
            let tem = [], temRes = []
            while (stack.length){
                let node = stack.shift()
                temRes.push(node.val)
                if (node.left) tem.push(node.left)
                if (node.right) tem.push(node.right)
            }
            let node = {val: temRes[0], next: null}
            let temNode = node
            for (let i = 1; i < temRes.length; i ++){
                temNode.next = {val: temRes[i], next: null}
                temNode = temNode.next
            }
            res.push(node)
            stack = tem
        }
        return res
    }
    return bfs(tree)
};