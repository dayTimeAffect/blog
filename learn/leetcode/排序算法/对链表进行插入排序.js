/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/14
 */
/*
* https://leetcode-cn.com/problems/insertion-sort-list/
* */
var insertionSortList = function(head) {
    const listNode = (val, next = null) => ({val, next})
    if (!head || !head.next) return head
    let res = {next: listNode(head.val)}
    head = head.next
    while (head){
        let cur = res
        while (cur.next){
            if (head.val < cur.next.val){
                let tem = cur.next
                cur.next = listNode(head.val, tem)
                break;
            }
            cur = cur.next
        }
        if (!cur.next) cur.next = listNode(head.val)
        head = head.next
    }
    return res.next
};
console.log(insertionSortList({
    val: 4, next: {val: 3, next: {val: 2, next: {val: 1, next: {val: 5, next: null}}}}
}));