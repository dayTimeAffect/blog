/*
* 删除排序链表中的重复元素 II: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
* */
var deleteDuplicates1 = function(head) {
    //链表解法
    //判断是否head为空
    if (!head) return head
    //头节点可能就重复了，所以需要定义一个假节点，最后返回res.next即可
    let res = {next: head}
    let cur = res
    let mark = head.next
    let flag = false
    while (mark){
        if (cur.next.val === mark.val){
            flag = true
        }else if (flag){
            cur.next = mark
            flag = false
        }else{
            cur = cur.next
        }
        mark = mark.next
    }
    //防止最后的的节点发生重复而没有删除跳出了循环
    if (flag) cur.next = null
    return res.next
};

var deleteDuplicates2 = function(head) {
    //递归解法
    if (!head || !head.next) return head
    if (head.val === head.next.val){
        let cur = head.next
        while (cur && head.val === cur.val) cur = cur.next
        //头结点需要删除，需要返回的是 deleteDuplicates2(cur)
        return deleteDuplicates2(cur)
    }else{
        //头结点需要保留，因此返回的是 head
        head.next = deleteDuplicates2(head.next)
    }
    return head
};

const listNode = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        }
    }
}
const showListNode = (listNode) => {
    let res = []
    while (listNode){
        res.push(listNode.val)
        listNode = listNode.next
    }
    return res
}
console.log(showListNode(deleteDuplicates2(listNode)));