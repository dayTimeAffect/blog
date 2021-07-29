/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/29
 */
/*
* https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree/
* */
var pathInZigZagTree = function(label) {
    // 递归去找当前节点的父节点
    let res = [label]
    let height = 0, tem = 1
    while (tem <= label){
        tem = tem * 2
        height ++
    }
    while (height > 1){
        label = findParent(label, height)
        res.unshift(label)
        height --
    }
    return res
};
var findParent = function (target, height){
    return Math.pow(2, height - 1) - 1 - Math.floor((target - Math.pow(2, height - 1)) / 2)
}
console.log(pathInZigZagTree(1));