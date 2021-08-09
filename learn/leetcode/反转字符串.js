/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/9
 */
/*
* https://leetcode-cn.com/problems/reverse-string/
* */
var reverseString = function(s) {
    let n = s.length - 1;
    for (let i = 0; i <= n / 2; i ++){
        [s[i], s[n - i]] = [s[n - i], s[i]]
    }
    return s
};
console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H","a","n","n","a","h"]));