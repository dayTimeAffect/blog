/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/25
 */
/*
* https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
* */
var levelOrder = function(root) {
    if (!root) return []
    let queueing = [root], res = []
    while (queueing.length){
        let tem = []
        while (queueing.length){
            let node = queueing.shift()
            res.push(node.val)
            if (node.left) tem.push(node.left)
            if (node.right) tem.push(node.right)
        }
        queueing = tem
    }
    return res
};