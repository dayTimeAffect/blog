/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/14
 */
/*
* https://leetcode.cn/problems/reorder-list/
* */
const showNode = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    return res
}
var reorderList = function(head) {
    let tem = [], node = head, res = {}
    while (node){
        tem.push(node)
        node = node.next
    }
    node = res
    for (let i = 0; i < tem.length / 2; i ++){
        node.next = tem[i]
        node = node.next
        node.next = tem[tem.length - i - 1]
        node = node.next
        node.next = null
    }
    return res.next
};
var reorderList = function(head) {
    let slow = head, fast = head
    while (fast && fast.next){
        // 快慢指针寻找中间位置
        slow = slow.next
        fast = fast.next.next
    }
    let reversal = {next: null}
    while (slow){
        //反转后半段链表
        let nextNode = slow.next
        slow.next = reversal.next
        reversal.next = slow
        slow = nextNode
    }
    reversal = reversal.next
    let tem = {next: null}, res = tem
    while (head && reversal){
        // 交叉拼接两个链表
        let tem1 = head.next, tem2 = reversal.next
        if (head === reversal){
            tem.next = head
            tem = tem.next
        }else {
            tem.next = head
            tem.next.next = reversal
            tem = tem.next.next
        }
        head = tem1
        reversal = tem2
    }
    return res.next
};
console.log(showNode(reorderList(
    {val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: {
                        val: 6, next: null
                        }
                    }
                }
            }
        }}
)));
