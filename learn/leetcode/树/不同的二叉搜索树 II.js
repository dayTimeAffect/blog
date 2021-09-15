/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/15
 */
/*
* https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
* */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function createTrees(start, end){
    if (start > end) return [null]
    let res = []
    for (let i = start; i <= end; i ++){
        let left = createTrees(start, i - 1)
        let right = createTrees(i + 1, end)
        for (let leftNode of left){
            for (let rightNode of right){
                res.push(new TreeNode(i, leftNode, rightNode))
            }
        }
    }
    return res
}
var generateTrees = function(n) {
    return createTrees(1, n)
};
console.log(generateTrees(2));
// console.log(generateTrees(3));
// console.log(generateTrees(1));