/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/24
 */
/*
* https://leetcode.cn/problems/permutation-ii-lcci/description/
* */
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    let res = []
    const dfs = (str, temp) => {
        if (str.length === 0) return res.push(temp)
        let map = new Map()
        for (let i = 0; i < str.length; i ++){
            if (map.has(str[i])) continue
            map.set(str[i], true)
            dfs(str.slice(0, i) + str.slice(i + 1), temp + str[i])
        }
    }
    dfs(S, '')
    return res
};