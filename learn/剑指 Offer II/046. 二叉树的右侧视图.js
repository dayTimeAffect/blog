/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/8
 */
/*
* https://leetcode.cn/problems/WNC0Lk/
* */
var rightSideView = function(root) {
    let res = [], nodeArr = []
    if (root) nodeArr.push(root)
    while (nodeArr.length){
        let tem = []
        for (let i = 0; i < nodeArr.length; i ++){
            if (nodeArr[i].left) tem.push(nodeArr[i].left)
            if (nodeArr[i].right) tem.push(nodeArr[i].right)
            if (i === nodeArr.length - 1) res.push(nodeArr[i].val)
        }
        nodeArr = tem
    }
    return res
};