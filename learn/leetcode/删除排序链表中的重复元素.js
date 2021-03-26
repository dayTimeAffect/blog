/*
* https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
* */
var deleteDuplicates1 = function(head) {
    //链表解法
    //遇见重复保留第一个，删除其他的重复值，所以直接返回head即可
    if (!head) return head
    let cur = head
    let mark = head.next
    while (mark){
        if (cur.val === mark.val){
            cur.next = mark.next
        }else{
            cur = cur.next
        }
        mark = mark.next
    }
    return head
};
var deleteDuplicates2 = function(head) {
    //递归解法
    //无论重复与否，head.next都为head后续节点的去重结果
    if (!head || !head.next) return head
    let cur = head.next
    while (cur && cur.val === head.val) cur = cur.next
    head.next = deleteDuplicates2(cur)
    return head
};