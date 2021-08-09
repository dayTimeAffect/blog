/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/9
 */
/*
* https://leetcode-cn.com/problems/middle-of-the-linked-list/
* */
var middleNode = function(head) {
    //快慢指针，由于偶数返回第二个节点。fast初始为head.next
    let fast = head.next
    let slow = head
    while (fast){
        fast = fast.next ? fast.next.next : fast.next
        slow = slow.next
    }
    return slow
};
console.log(middleNode(
    {val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next: null
                    }
                }
            }
        }}
));
console.log(middleNode(
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
));
console.log(middleNode(
    {val: 1, next: {
            val: 2, next: null
        }}
));