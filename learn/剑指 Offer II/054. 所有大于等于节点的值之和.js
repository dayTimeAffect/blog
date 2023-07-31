/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/21
 */
/*
* https://leetcode.cn/problems/w6cpku/
* */
var convertBST = function(root) {
    if (!root) return root
    let curSum = 0
    const handle = (node) => {
        if (node.right) handle(node.right)
        let curNodeVal = node.val
        node.val += curSum
        curSum += curNodeVal
        if (node.left) handle(node.left)
        return node
    }
    return handle(root)
};
convertBST({
    val: 4,
    left: {
        val: 1,
        left: {
            val: 0, left: null, right: 0
        },
        right: {
            val: 2, left: null,
            right: {
                val: 3, left: null, right: null
            }
        }
    },
    right: {
        val: 6,
        left: {
            val: 5, left: null, right: null
        },
        right: {
            val: 7, left: null,
            right: {
                val: 8, left: null, right: null
            }
        }
    }
})