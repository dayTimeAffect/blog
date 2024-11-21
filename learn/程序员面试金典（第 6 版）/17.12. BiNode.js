/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/15
 */
/*
* https://leetcode.cn/problems/binode-lcci/description/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 二叉树转链表
// 二叉树特性，左子树的所有节点都小于根节点，右子树的所有节点都大于根节点，所以中序遍历是个递增序列
var convertBiNode = function(root) {
    const dfs = (root) => {
        if (!root) return { tem_head: null, tem_tail: null}
        let head = root
        let tail = root
        if (root.left){
            const { tem_head, tem_tail } = dfs(root.left)
            head = tem_head
            tail = tem_tail
            tail.right = root
            root.left = null
            tail = root
        }
        if (root.right){
            const { tem_head, tem_tail } = dfs(root.right)
            root.right = tem_head
            tail = tem_tail
        }
        return { tem_head: head, tem_tail: tail }
    }
    const { tem_head } = dfs(root)
    return tem_head
};
const print = (root) => {
    let tem = root
    while (tem){
        console.log(tem.val);
        tem = tem.right
    }
}
print(convertBiNode(
    {
        val: 4,
        left: {
            val: 2,
            left: { val: 1, left: null, right: null },
            right: { val: 3, left: null, right: null }
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
))