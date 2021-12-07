/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/6
 */
/*
* https://leetcode-cn.com/problems/truncate-sentence/
* */
/*var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(" ")
};*/
var truncateSentence = function(s, k) {
    let res = "", index = 0, len = s.length
    while (k > 0 && index < len){
        res += s[index]
        index ++
        if (s[index] === " ") k --
    }
    return res
};
console.log(truncateSentence("Hello how are you Contestant", 5));