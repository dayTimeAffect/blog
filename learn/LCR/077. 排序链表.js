/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/21
 */
/*
* https://leetcode.cn/problems/7WHec2/description/
* */
var sortList = function(head) {
    const linkNode = (cur, node) => {
        cur.next = node
        while (cur.next !== null){
            cur = cur.next
        }
        return cur
    }
    const handle = (node) => {
        if (node === null || node.next === null) return node
        let base = node.val, slow = node, fast = node
        while (fast){
            slow = slow.next
            fast = fast.next
            base = slow.val
            if (fast){
                fast = fast.next
            }
        }
        let left = {next: null}, equal = {next: null}, right = {next: null}
        const leftHead = left, equalHead = equal, rightHead = right
        while (node !== null){
            if (node.val === base){
                equal.next = node
                equal = equal.next
            }else if (node.val < base){
                left.next = node
                left = left.next
            }else {
                right.next = node
                right = right.next
            }
            node = node.next
        }
        let head = {}, res = head
        if (leftHead.next){
            left.next = null
            head = linkNode(head, handle(leftHead.next))
        }
        equal.next = null
        head = linkNode(head, equalHead.next)
        if (rightHead.next){
            right.next = null
            linkNode(head, handle(rightHead.next))
        }
        return res.next
    }
    return handle(head)
};
const showListNode = (listNode) => {
    let res = []
    while (listNode){
        res.push(listNode.val)
        listNode = listNode.next
    }
    return res
}
console.log(showListNode(sortList({
    val: 4, next: {
        val: 2, next: {
            val: 1, next: {
                val: 3, next: null
            }
        }
    }
})));
console.log(showListNode(sortList({
    val: -1, next: {
        val: 5, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 0, next: null
                }
            }
        }
    }
})));