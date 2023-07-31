/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/10
 */
/*
* https://leetcode.cn/problems/next-greater-node-in-linked-list/
* */
var nextLargerNodes = function(head) {
    let nodes = [head]
    while (head.next){
        head = head.next
        nodes.push(head)
    }
    let res = new Array(nodes.length)
    res[nodes.length - 1] = 0
    const findNextMax = (cur, next) => {
        if (!next) return 0
        if (next.val > cur.val) return next
        return findNextMax(cur, next.nextMaxNode)
    }
    for (let i = nodes.length - 2; i >= 0; i --){
        nodes[i].nextMaxNode = findNextMax(nodes[i], nodes[i + 1])
        res[i] = nodes[i].nextMaxNode ? nodes[i].nextMaxNode.val : 0
    }
    return res
};
console.log(nextLargerNodes({
    val: 2, next: {
        val: 7, next: {
            val: 4, next: {
                val: 3, next: {
                    val: 5, next: null
                }
            }
        }
    }
}));