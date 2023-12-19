/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/31
 */
/*
* https://leetcode.cn/problems/sum-lists-lcci/
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = {val: NaN, next: null}
    let resNode = res, tem = 0
    while (l1 || l2){
        let curVal = tem
        if (l1){
            curVal += l1.val
            l1 = l1.next
        }
        if (l2){
            curVal += l2.val
            l2 = l2.next
        }
        resNode.next = {val: curVal % 10, next: null}
        resNode = resNode.next
        if (curVal >= 10){
            tem = 1
        }else {
            tem = 0
        }
    }
    if (tem){
        resNode.next = {val: 1, next: null}
    }
    return res.next
};