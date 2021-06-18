/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/18
 */
/*
* https://leetcode-cn.com/problems/symmetric-tree/
* */
var isSymmetric = function(root) {
    // 递归算法。判断两棵树是否对称
    // 假如左子树的左孩子 === 右子树的右孩子 && 左子树的右孩子 === 右子树的左孩子 那么递归下去，这两棵树就是对称的
    if (!root) return true
    var isSymVal = function (root1, root2){
        if (!root1 && !root2) return true
        if (root1 && root2 && root1.val === root2.val){
            return isSymVal(root1.left, root2.right) && isSymVal(root1.right, root2.left)
        }
        return false
    }
    return isSymVal(root.left, root.right)
};
console.log(isSymmetric({val: 1, left: {val: 2, left: {val: 3, left: null, right: null}, right: null}, right: {val: 2, left: {val: 4, left: null, right: null}, right: {val: 3, left: null, right: null}}}));