/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/19
 */
/*
* https://leetcode.cn/problems/paths-with-sum-lcci/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root == null) return 0;
    let ret = rootSum(root, sum);
    ret += pathSum(root.left, sum);
    ret += pathSum(root.right, sum);
    return ret;
};

const rootSum = (root, sum) => {
    let ret = 0;
    if (root == null) return ret;
    if (root.val === sum) ret++;
    ret += rootSum(root.left, sum - root.val);
    ret += rootSum(root.right, sum - root.val);
    return ret;
}