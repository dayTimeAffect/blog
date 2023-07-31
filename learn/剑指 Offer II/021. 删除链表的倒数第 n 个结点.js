/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/3
 */
/*
* https://leetcode.cn/problems/SLwz0R/
* */
var removeNthFromEnd = function(head, n) {
    let flag = n
    let tem = {next: head}
    let left = tem, right = tem
    while (right){
        if (right.next){
            right = right.next
        }else {
            left.next = left.next ? left.next.next : null
            break;
        }
        if (flag > 0){
            flag --
        }else {
            left = left.next
        }
    }
    return tem.next
};
let node = {
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: null
                }
            }
        }
    }
}
const showNode = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    return res
}
// console.log(showNode(removeNthFromEnd(node, 2)));
// console.log(showNode(removeNthFromEnd(node, 1)));
console.log(showNode(removeNthFromEnd(node, 5)));