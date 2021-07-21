/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/21
 */
/*
* https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
* */
var getIntersectionNode = function(headA, headB) {
    // 双指针
    if (!headA || !headB) return null
    let temA = headA
    let temB = headB
    while (temA !== temB){
        if (temA) {
            temA = temA.next
        }else{
            temA = headB
        }
        if (temB) {
            temB = temB.next
        }else{
            temB = headA
        }
    }
    return temA
};