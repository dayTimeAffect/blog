/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/26
 */
/*
* https://leetcode-cn.com/problems/isomorphic-strings/
* */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    let s_map = {}, t_map = {}, len = s.length
    for (let i = 0; i < len; i ++){
        if (s_map[s[i]] || t_map[t[i]]){
            if (s[i] === t_map[t[i]] && t[i] === s_map[s[i]]) continue;
            return false;
        }else{
            s_map[s[i]] = t[i]
            t_map[t[i]] = s[i]
        }
    }
    return true
};