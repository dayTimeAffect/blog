/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/8
 */
/*
* https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA, p2 = headB, flag = 0
    while (p1 && p2){
        if (p1 === p2){
            return p1
        }
        p1 = p1.next
        p2 = p2.next
        if (!p1 && flag < 2) {
            p1 = headB
            flag ++
        }
        if (!p2 && flag < 2) {
            p2 = headA
            flag ++
        }
    }
    return null
};