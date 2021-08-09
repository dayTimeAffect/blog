/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/9
 */
/*
* https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
* */
var removeNthFromEnd = function(head, n) {
    // 快慢指针。定义变量res = {next: head}，防止删除头结点。定义index，判断慢指针移动时机。当快指针在最后一个节点，此时慢指针的下一个节点就是需要被删除的节点
    let index = 0
    let res = {next: head}
    let fast = res
    let slow = res
    while (fast.next){
        fast = fast.next
        if (index >= n){
            slow = slow.next
        }
        index ++
    }
    slow.next = slow.next.next
    return res.next
};
var print = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    console.log(res)
}
print(removeNthFromEnd({
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: null
                }
            }
        }
    }}, 4
));