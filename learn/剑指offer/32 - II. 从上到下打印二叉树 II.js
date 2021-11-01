/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/25
 */
/*
* https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
* */
var levelOrder = function(root) {
    if (!root) return []
    let queueing = [root], res = []
    while (queueing.length){
        let temQueueing = [], temRes = []
        while (queueing.length){
            let node = queueing.shift()
            temRes.push(node.val)
            if (node.left) temQueueing.push(node.left)
            if (node.right) temQueueing.push(node.right)
        }
        queueing = temQueueing
        res.push(temRes)
    }
    return res
};