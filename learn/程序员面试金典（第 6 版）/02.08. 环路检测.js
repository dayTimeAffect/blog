/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/8
 */
/*
* https://leetcode.cn/problems/linked-list-cycle-lcci/
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null
    let slow = head, fast = head
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            let inlet = head
            while (inlet !== slow){
                inlet = inlet.next
                slow = slow.next
            }
            return inlet
        }

    }
    return null
};