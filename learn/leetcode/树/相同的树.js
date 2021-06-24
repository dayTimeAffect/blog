/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/24
 */
/*
* https://leetcode-cn.com/problems/same-tree/
* */
var isSameTree = function(p, q) {
    if (p === q) return true
    if (!p || !q) return false
    return p.val === q.val ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false
};
