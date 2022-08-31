/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/30
 */
/*
* https://leetcode.cn/problems/maximum-binary-tree-ii/
* */
var insertIntoMaxTree = function(root, val) {
    if (!root) return ({val: val, left: null, right: null})
    if (root.val < val)  return ({val: val, left: root, right: null})
    let tem = root
    while (tem.right){
        if (tem.val > val && tem.right.val < val){
            let node = tem.right
            tem.right = ({val: val, left: node, right: null})
            break;
        }
        tem = tem.right
    }
    if (!tem.right){
        tem.right = ({val: val, left: null, right: null})
    }
    return root
};