/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/17
 */
/*
* https://leetcode.cn/problems/UHnkqh/
* */
var reverseList = function(head) {
    let curNode = null
    while (head){
        let node = head.next
        head.next = curNode
        curNode = head
        head = node
    }
    return curNode
};