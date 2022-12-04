/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/27
 */
/*
* https://leetcode.cn/problems/intersection-of-two-linked-lists/
* */
var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB
    while (pA !== pB){
        if (!pA) {
            pA = headB
        }else {
            pA = pA.next
        }
        if (!pB) {
            pB = headA
        }else {
            pB = pB.next
        }
    }
    return pA
};