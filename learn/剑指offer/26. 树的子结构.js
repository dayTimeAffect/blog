/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/25
 */
/*
* https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
* */
var isSubStructure = function(A, B) {
    if (!B) return false
    const isSame = (a, b) => {
        if (!b) return true
        if (!a && a === b) return true
        if (!a || a.val !== b.val) return false
        return isSame(a.left, b.left) && isSame(a.right, b.right)
    }
    const dfs = (node) => {
        if (!node) return false
        if (node && node.val === B.val && isSame(node, B)) return true;
        return dfs(node.left) || dfs(node.right)
    }
    return dfs(A, B)
};
console.log(isSubStructure({
    val: 1,
    left: {val: 2, left: {val: 4, left: null, right: null}, right: null},
    right: {val: 3, left: null, right: null}
}, {val: 3, left: null, right: null}));
