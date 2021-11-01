/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/25
 */
/*
* https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
* */
var levelOrder = function(root) {
    if (!root) return []
    let queueing = [root], res = [], flag = true
    while (queueing.length){
        let temQueueing = [], temRes = []
        while (queueing.length){
            let node = queueing.shift()
            temRes.push(node.val)
            if (node.left) temQueueing.push(node.left)
            if (node.right) temQueueing.push(node.right)
        }
        res.push(flag ? temRes : temRes.reverse())
        queueing = temQueueing
        flag = !flag
    }
    return res
};