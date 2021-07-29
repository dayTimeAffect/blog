/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/29
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head
    const res = head.next
    let current, node = head
    while (node && node.next){
        if (current) current.next = node.next

        current = node
        let target = current.next
        node = target.next
        //交换指针
        target.next = current
        current.next = node
    }
    return res
};
let a = swapPairs(
    {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}
)
while (a){
    console.log(a.val)
    a = a.next
}