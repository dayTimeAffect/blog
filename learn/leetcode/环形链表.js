/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/9
 */
/*
* https://leetcode-cn.com/problems/linked-list-cycle/
* */
var hasCycle = function(head) {
    if (!head) return false
    let left = head.next
    let right = head
    if (!left) return false
    left = left.next
    while (left !== right && left !== null){
        left = left.next
        if (left) left = left.next
        right = right.next
    }
    return left === right && left !== null
};
for (let i = 0; i < 10; i ++){
    let len = Math.floor(Math.random() * 100)
}