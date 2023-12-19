/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/8
 */
/*
* https://leetcode.cn/problems/palindrome-linked-list-lcci/
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head, flag = true
    const dfs = (curNode) => {
        if (curNode === null) return;
        dfs(curNode.next)
        if (node.val !== curNode.val){
            flag = false
        }
        node = node.next
    }
    dfs(head)
    return flag
};