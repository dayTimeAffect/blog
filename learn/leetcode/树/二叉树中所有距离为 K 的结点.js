/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/28
 */
/*
* https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/
* */

var distanceK = function(root, target, k) {
    //遍历树，为每个节点添加父节点
    var createParent = (root, parent) => {
        if (!root) return;
        root.parent = parent
        createParent(root.left, root)
        createParent(root.right, root)
    }
    //查找满足层级的子节点。dir用于避免重复遍历
    var findChildK = function (node, k, dir){
        if (!node || k < 0) return ;
        if (k === 0) return res.push(node.val)
        if (dir){
            findChildK(node[dir], k - 1)
        }else{
            findChildK(node.left, k - 1)
            findChildK(node.right, k - 1)
        }
    }
    //结果存放数组
    let res = []
    //首先先创建一个可以找到父节点的树
    createParent(root.left, root)
    createParent(root.right, root)

    //从目标值出发
    findChildK(target, k)
    let parentNode = target.parent
    let dirJudge = target

    //循环遍历父节点与父节点的另一个子节点
    while (parentNode && k > 0){
        k = k - 1
        if (parentNode.left === dirJudge){
            findChildK(parentNode, k, 'right')
        }else{
            findChildK(parentNode, k, 'left')
        }
        dirJudge = parentNode
        parentNode = parentNode.parent
    }
    return res
};

