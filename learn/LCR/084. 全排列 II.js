/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/4
 */
/*
* https://leetcode.cn/problems/7p8L0Z/description/
* */
var permuteUnique = function(nums) {
    let res = [], path = [], len = nums.length
    const handle = (pathUse) => {
        if (path.length === len) return res.push([...path])
        let map = new Set()
        for (let i = 0; i < len; i ++){
            if (pathUse[i]) continue;
            if (map.has(nums[i])) continue;
            map.add(nums[i])
            pathUse[i] = true
            path.push(nums[i])
            handle(pathUse)
            pathUse[i] = false
            path.pop()
        }
    }
    handle([])
    return res
};
console.log(permuteUnique([1,1,2]));