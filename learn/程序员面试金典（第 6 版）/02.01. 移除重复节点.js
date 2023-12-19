/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/19
 */
/*
* https://leetcode.cn/problems/remove-duplicate-node-lcci/description/
* */
var removeDuplicateNodes = function(head) {
    if (!head) return head
    let valSet = new Set([head.val])
    let node = head
    while (node && node.next){
        if (valSet.has(node.next.val)){
            node.next = node.next.next
        }else {
            valSet.add(node.next.val)
            node = node.next
        }
    }
    return head
};