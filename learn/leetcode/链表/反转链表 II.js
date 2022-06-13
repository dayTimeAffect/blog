/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/6
 */
/*
* https://leetcode.cn/problems/reverse-linked-list-ii/
* */
var reverseBetween = function(head, left, right) {
    if (left === right) return head
    if (!head.next) return head
    let node = {next: null}, res = node, index = 1
    let fragments = {next: null}, leftNode = null
    while (head){
        let tem = head.next
        if (index >= left && index <= right){
            head.next = fragments.next
            fragments.next = head
        }
        if (index === left){
            leftNode = head
        }
        if (index === right){
            node.next = fragments.next
            node = leftNode
        }
        if (index < left || index > right){
            node.next = head
            node = node.next
        }
        head = tem
        index ++
    }
    return res.next
};
const showNode = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    return res
}
console.log(reverseBetween({
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: {
                        val: 6, next: null
                    }
                }
            }
        }
    }
}, 2, 4));