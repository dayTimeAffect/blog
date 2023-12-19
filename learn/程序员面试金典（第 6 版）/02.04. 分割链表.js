/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/31
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let small = {val: -Infinity, next: null}, large = {val: Infinity, next: null};
    let smallNode = small, largeNode = large;
    while (head){
        if (head.val < x){
            smallNode.next = head
            smallNode = smallNode.next
        }else {
            largeNode.next = head
            largeNode = largeNode.next
        }
        head = head.next
    }
    largeNode.next = null
    smallNode.next = large.next
    return small.next
};