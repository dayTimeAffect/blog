/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/3
 */
/*
* https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/description/
* */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let all_map = {}, filter_map = {}, res = 0, flag = true
    for (let i = 0; i < s.length; i ++){
        all_map[s[i]] = (all_map[s[i]] || 0) + 1
    }
    for (let key in all_map){
        if (all_map[key] < k){
            flag = false
            filter_map[key] = true
        }
    }
    if (flag) return s.length
    let index = 0
    for (let i = 0; i < s.length; i ++){
        if (filter_map[s[i]]) {
            if (i > index){
                res = Math.max(res, longestSubstring(s.slice(index, i), k))
            }
            index = i + 1
        }
    }
    if (index < s.length) res = Math.max(res, longestSubstring(s.slice(index), k))
    return res
};
// console.log(longestSubstring("aaabb", 3));
// console.log(longestSubstring("ababbc", 2));
console.log(longestSubstring("bbaaacbd", 3));