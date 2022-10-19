/*
* https://leetcode.cn/problems/partition-list/
* */
var partition = function(head, x) {
    let left = {next: null}, right = {next: null}
    let temLeft = left, temRight = right
    while (head){
        if (head.val < x){
            temLeft.next = head
            temLeft = temLeft.next
        } else {
            temRight.next = head
            temRight = temRight.next
        }
        head = head.next
    }
    temRight.next = null
    temLeft.next = right.next
    return left.next
};