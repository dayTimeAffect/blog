/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/10
 */
/*
* https://leetcode.cn/problems/c32eOV/
* */
var detectCycle = function(head) {
    let map = new Set()
    while (head){
        if (map.has(head)){
            return head
        }
        map.add(head)
        head = head.next
    }
    return null
};
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast){
        slow = slow.next
        if (fast.next){
            fast = fast.next.next
        }else {
            //快指针能走到null，那就没有环
            return null
        }
        if (fast === slow){
            //题解说明 https://leetcode.cn/problems/c32eOV/solution/lian-biao-zhong-huan-de-ru-kou-jie-dian-vvofe/
            let ptr = head
            while (ptr != slow){
                ptr = ptr.next
                slow = slow.next
            }
            return ptr
        }
    }
    return null
};