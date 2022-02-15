/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/7
 */
/*
* https://leetcode-cn.com/problems/first-unique-character-in-a-string/
* */
var firstUniqChar = function(s) {
    let hash = {}
    for (let i in s) hash[s[i]] ? (hash[s[i]][0] ++) : (hash[s[i]] = [1, i])
    hash['false'] = [1, -1]
    return Object.values(hash).find(v => v[0] === 1)[1]
};
console.log(firstUniqChar("dddccdbba"));
// console.log(firstUniqChar("dddccdbba"));