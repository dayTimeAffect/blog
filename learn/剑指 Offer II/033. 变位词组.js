/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/8
 */
/*
* https://leetcode.cn/problems/sfvd7V/
* */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for (let i = 0; i < strs.length; i ++){
        const tem = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j ++){
            tem[strs[i][j].charCodeAt(0) - 97] ++;
        };
        if (map[tem]){
            map[tem].push(strs[i])
        }else {
            map[tem] = [strs[i]]
        }
    }
    return Object.values(map)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));