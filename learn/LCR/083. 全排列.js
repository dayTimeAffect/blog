/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/4
 */
/*
* https://leetcode.cn/problems/VvJkup/
* */
var permute = function(nums) {
    const res = [], path = [], len = nums.length;
    const handle = (curUsed) => {
        if (path.length === len) res.push([...path])
        for (let i = 0; i < len; i ++){
            if (curUsed[i]) continue;
            curUsed[i] = true
            path.push(nums[i])
            handle(curUsed)
            curUsed[i] = false
            path.pop()
        }
    }
    handle([])
    return res
};