/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/9
 */
/*
* https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
* */
var reversePrint = function(head) {
    let res = []
    while (head){
        res.push(head.val)
        head = head.next
    }
    return res.reverse()
};