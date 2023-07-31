/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/10
 */
/*
* https://leetcode.cn/problems/3u1WK4/
* */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    let map = new Set()
    while (headA){
        map.add(headA)
        headA = headA.next
    }
    while (headB){
        if (map.has(headB)) return headB
        headB = headB.next
    }
    return null
};
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    let temA = headA, temB = headB
    while (temA !== temB){
        temA = temA ? temA.next : headB
        temB = temB ? temB.next : headA
    }
    return null
};