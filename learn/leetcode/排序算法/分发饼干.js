/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/30
 */
/*
* https://leetcode.cn/problems/assign-cookies/
* */
const sort = (nums) => {
    if (nums.length <= 1) return nums
    let less = [], greater = [], equal = [], base = nums[Math.floor(nums.length / 2)]
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] < base){
            less.push(nums[i])
        }else if (nums[i] === base){
            equal.push(nums[i])
        }else {
            greater.push(nums[i])
        }
    }
    return [...sort(less), ...equal, ...sort(greater)]
}

var findContentChildren = function(g, s) {
    g = sort(g)
    s = sort(s)
    let max = 0, g_i = 0, s_i = 0
    while (g_i < g.length && s_i < s.length){
        if (s[s_i] >= g[g_i]){
            max ++
            g_i ++
        }
        s_i ++
    }
    return max
};
console.log(findContentChildren([1, 2, 3], [1, 1]));