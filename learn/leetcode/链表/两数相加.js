/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/27
 */
/*
* https://leetcode.cn/problems/add-two-numbers/
* */
var addTwoNumbers = function(l1, l2) {
    const createNode = (val) => ({val, next: null})
    let node = {}, tem = 0, res = node
    while (l1 || l2 || tem){
        let v = tem
        if (l1){
            v += l1.val
            l1 = l1.next
        }
        if (l2){
            v += l2.val
            l2 = l1.next
        }
        const cur = v % 10
        tem = (v - cur) / 10
        node.next = createNode(cur)
        node = node.next
    }
    return res.next
};