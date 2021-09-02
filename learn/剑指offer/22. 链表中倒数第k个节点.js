/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/2
 */
/*
* https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
* */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let left = head, right = head
    while (right){
        if (k <= 0){
            left = left.next
        }
        right = right.next
        k --
    }
    return left
};
console.log(getKthFromEnd(
    {val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next: {
                    val: 5, next:{
                        val: 6, next: null
                        }
                    }
                }
            }
        }}
, 0));