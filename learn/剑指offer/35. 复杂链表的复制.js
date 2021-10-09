/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/9
 */
function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};
/*
* https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
* */
var copyRandomList = function(head) {
    let res = {next: null}
    let temNode = res
    let map = new WeakMap()
    while (head){
        let node = new Node(head.val, null, head.random)
        map.set(head, node)
        temNode.next = node
        temNode = temNode.next
        head = head.next
    }
    temNode = res.next
    while (temNode){
        temNode.random = map.get(temNode.random) || null
        temNode = temNode.next
    }
    return res.next
};
let d = {val:4, next: null, random: null}
let c = {val:3, next: d, random: null}
let b = {val:2, next: c, random: c}
let a = {val:1, next: b, random: d}
console.log(copyRandomList(a));