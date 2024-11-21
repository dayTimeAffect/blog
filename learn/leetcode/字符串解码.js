/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/20
 */
/*
* https://leetcode.cn/problems/decode-string/description/
* */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const repeatStr = (number, str) => new Array(number).fill(str).join('')
    const handle = (s) => {
        let num = '', str = '', count = 0, res = ''
        for (let i = 0; i < s.length; i ++){
            if (/[0-9]/.test(s[i]) && count === 0){
                num += s[i]
            }else if (/[a-z]/.test(s[i]) && count === 0){
                res += s[i]
            }else if (s[i] === '['){
                if (count >= 1) str += s[i];
                count ++
            }else if (s[i] === ']'){
                count --
                if (count >= 1) str += s[i];
            }else {
                str += s[i]
            }
            if (num && str && !count){
                res += repeatStr(Number(num), handle(str))
                num = ''
                str = ''
            }
        }
        return res
    }
    return handle(s)
};
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));