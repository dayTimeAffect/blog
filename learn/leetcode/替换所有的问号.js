/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/5
 */
/*
* https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
* */
var modifyString = function(s) {
    let s_Arr = s.split(''), len = s.length
    for (let i = 0; i < len; i ++){
        if (s_Arr[i] === '?'){
            let code = 97, preCode = s_Arr[i - 1] ? s_Arr[i - 1].charCodeAt(0) : 0, nextCode = s_Arr[i + 1] ? s_Arr[i + 1].charCodeAt(0) : 0
            while (code === preCode || code === nextCode) code ++
            s_Arr[i] = String.fromCharCode(code)
        }
    }
    return s_Arr.join('')
};
console.log(modifyString('?a'));
