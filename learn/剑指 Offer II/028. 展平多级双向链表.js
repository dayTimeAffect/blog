/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/25
 */
/*
* https://leetcode.cn/problems/Qv1Da2/
* */
var flatten = function(head) {
    const handle = (origin, target) => {
        origin.child = null
        origin.next = target
        origin.next.prev = origin
        let node = origin, nextNode = null, tailNode = null
        while (node){
            tailNode = node
            nextNode = node.next
            if (node.child){
                const { head, tail } = handle(node, node.child)
                node.next = head
                if (nextNode){
                    tail.next = nextNode
                    nextNode.prev = tail
                }
                node = nextNode
            }else {
                node = node.next
            }
        }
        return {head: origin, tail: tailNode}
    }
    return handle({next: null}, head).head.next
};
var flatten = function(head) {
    let nextNode = [], curNode = head
    while (curNode){
        if (curNode.child){
            nextNode.push(curNode.next)
            curNode.next = curNode.child
            curNode.next.prev = curNode
            curNode.child = null
        }
        if (!curNode.next){
            let temNode = null
            while (nextNode.length > 0 && !temNode){
                temNode = nextNode.pop()
            }
            if (temNode){
                curNode.next = temNode
                curNode.next.prev = curNode
            }
        }
        curNode = curNode.next
    }
    return head
};
const showNode = (node) => {
    let res = []
    while (node){
        res.push(node.val)
        node = node.next
    }
    return res
}
console.log(showNode(flatten(
    {val: 1, next: {
            val: 2, next: {
                child: {val: 'a', child: {val: 'c', next: {val: 'd', next: null}}, next: {val: 'b', next: null}},
                val: 3, next: {
                    child: {val: 'a1', next: {val: 'b1', next: null, child: {val: 'c1', next: {val: 'd1', next: null}}}},
                    val: 4, next: {
                        val: 5, next: {
                            child: {val: 'a2', next: {val: 'b2', next: null}},
                            val: 6, next: null
                        }
                    }
                }
            }
        }}
)));