/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/24
 */
/*
* https://leetcode.cn/problems/permutation-i-lcci/description/
* */
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    const res = []
    const dfs = (str, temp) => {
        if (str.length === 0) return res.push(temp)
        for (let i = 0; i < str.length; i ++){
            dfs(str.slice(0, i) + str.slice(i + 1), temp + str[i])
        }
    }
    dfs(S, '')
    return res
};