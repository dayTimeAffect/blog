/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/21
 */
/*
* https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
* */
var findTarget = function(root, k) {
    const hashMap = new Set()
    const dfs = (node) => {
        if (hashMap.has(node.val)) return true
        hashMap.add(k - node.val)
        return Boolean((node.left && dfs(node.left)) || (node.right && dfs(node.right)))
    }
    return root && dfs(root)
};
console.log(findTarget({
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    },
}, 19));