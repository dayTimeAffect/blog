/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/27
 */
/*
* https://leetcode.cn/problems/odd-even-linked-list/
* */
const showNode = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    console.log(res)
}
var oddEvenList = function(head) {
    if (!head) return head
    let even = {next: null}, odd = {next: null}, index = 1
    const temEven = even, temOdd = odd
    while (head){
        if (index % 2 === 1) {
            odd.next = head
            odd = odd.next
        }else {
            even.next = head
            even = even.next
        }
        index ++
        head = head.next
    }
    even.next = null
    odd.next = temEven.next
    return temOdd.next
};
showNode(oddEvenList({
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: null
                }
            }
        }
    }
}))