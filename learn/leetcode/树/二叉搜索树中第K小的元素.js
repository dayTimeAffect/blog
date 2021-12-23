/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/23
 */
/*
* https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
* */
var kthSmallest = function(root, k) {
    const inorderTraversal = (root) => {
        let res = []
        if (root.left) res.push(...inorderTraversal(root.left))
        res.push(root.val)
        if (root.right) res.push(...inorderTraversal(root.right))
        return res
    }
    return inorderTraversal(root)[k - 1]
};