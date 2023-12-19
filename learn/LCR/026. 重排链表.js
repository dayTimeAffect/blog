/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/17
 */
/*
* https://leetcode.cn/problems/LGjMqU/
* */
var reorderList = function(head) {
    let nodeArr = []
    let node = head
    while (node){
        nodeArr.push(node)
        node = node.next
    }
    nodeArr.splice(0, nodeArr.length / 2)
    node = head
    let tem = nodeArr.pop()
    while (node && tem && node !== tem){
        let next = node.next
        node.next = tem
        tem.next = next
        node = node.next.next
        tem = nodeArr.pop()
    }
    node.next = null
    return head
};
const showNode = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    return res
}
console.log(showNode(reorderList({
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: null
                }
            }
        }
    }
})));