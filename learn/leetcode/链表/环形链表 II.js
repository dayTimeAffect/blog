/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/15
 */
/*
* https://leetcode-cn.com/problems/linked-list-cycle-ii/
* */
var detectCycle = function(head) {
    const hashMap = new Set()
    let node = head
    while (node){
        if (hashMap.has(node)) return node
        hashMap.add(node)
        node = node.next
    }
    return node
};