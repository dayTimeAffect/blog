/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/4
 */
/*
* https://leetcode.cn/problems/4ueAj6/
* */
var insert = function(head, insertVal) {
    if (!head) {
        head = {val: insertVal, next: null}
        head.next = head
        return head
    }
    let map = new Set()
    let node = head
    while (1){
        map.add(head)
        let next = node.next
        if (map.has(next)){
            // 循环一圈，还未插入。针对全是同一个值的表
            node.next = {val: insertVal, next}
            break;
        }
        if (node.val > node.next.val && (insertVal >= node.val || insertVal <= node.next.val) ){
            //当前为最大节点,下一个为最小节点。大于最大节点或者小于最小节点。插入
            node.next = {val: insertVal, next}
            break;
        }
        if (insertVal >= node.val && insertVal <= node.next.val){
            //正常中间位置插入
            node.next = {val: insertVal, next}
            break;
        }
        node = next
    }
    return head
};