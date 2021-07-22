/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/22
 */
/*
* https://leetcode-cn.com/problems/copy-list-with-random-pointer/
* */
let hashMap = new Map()
var copyRandomList = function(head) {
    if (!head) return null
    if (hashMap.has(head)) return hashMap.get(head)
    let node = {}
    let res = node
    while (head){
        if (hashMap.has(head)){
            node.next = hashMap.get(head)
        }else{
            node.next = {val: head.val, next: head.next, random: null}
            hashMap.set(head, node.next)
            node.next.random = copyRandomList(head.random)
        }
        node = node.next
        head = head.next
    }
    return res.next
};
var copyRandomList = function(head) {
    let hashMap = new Map()
    if (!head) return null
    let cur = head
    let node = {}
    let res = node
    while (cur){
        node.next = {val: cur.val, next: cur.next, random: null}
        hashMap.set(cur, node.next)
        node = node.next
        cur = cur.next
    }
    cur = head
    node = res.next
    while (cur){
        node.random = hashMap.get(cur.random) || null
        node = node.next
        cur = cur.next
    }
    return res.next
};
