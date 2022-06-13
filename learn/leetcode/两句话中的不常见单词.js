/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/26
 */
/*
* https://leetcode.cn/problems/uncommon-words-from-two-sentences/
* */
var uncommonFromSentences = function(s1, s2) {
    let map = {}, tem1 = s1.split(' '), tem2 = s2.split(' ')
    for (let i = 0; i < tem1.length; i ++){
        map[tem1[i]] = (map[tem1[i]] || 0) + 1
    }
    for (let i = 0; i < tem2.length; i ++){
        map[tem2[i]] = (map[tem2[i]] || 0) + 1
    }
    return Object.keys(map).filter(v => map[v] === 1)
};