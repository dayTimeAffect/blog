/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/13
 */
/*
* https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
* */
var replaceSpace = function(s) {
    return s.replace(/ /g, "%20")
};
var replaceSpace = function(s) {
    return s.split(' ').join("%20")
};
var replaceSpace = function(s) {
    let res = "", size = s.length
    for (let i = 0; i < size; i ++){
        if (s[i] === " ") res += "%20"
        else res += s[i]
    }
    return res
};
console.log(replaceSpace("We are happy."));