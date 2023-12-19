/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/31
 */
/*
* https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/
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
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    let node = head
    while (head){
        if (!k){
            node = node.next
        }else {
            k --
        }
        head = head.next
    }
    return node.val
};
console.log(kthToLast({
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: null
                }
            }
        }
    }
}, 1));