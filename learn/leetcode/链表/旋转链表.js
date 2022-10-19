/*
* https://leetcode.cn/problems/rotate-list/
* */
var rotateRight = function(head, k) {
    if (k === 0) return head
    let temArr = [], tem = head
    while (head){
        temArr.push(head)
        head = head.next
    }
    let len = temArr.length, temK = k % len
    if (temK === 0 || temArr.length <= 1) return tem
    let pre = temArr.slice(len - temK), next = temArr.slice(0, len - temK)
    pre[pre.length - 1].next = next[0]
    next[next.length - 1].next = null
    return pre[0]
};
console.log(rotateRight({val: 1, next: null}, 1));