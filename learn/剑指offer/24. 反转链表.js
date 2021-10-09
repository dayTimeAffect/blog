/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/9
 */
/*
* https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
* */
var reverseList = function(head) {
    let node = {next: null}
    while (head){
        let tem = head.next
        head.next = node.next
        node.next = head
        head = tem
    }
    return node.next
};
console.log(reverseList({
    val: 1, next: {
        val: 2, next: {
            val: 3, next: null
        }
    }
}));