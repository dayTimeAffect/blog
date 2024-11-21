/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/11
 */
/*
* https://leetcode.cn/problems/restore-ip-addresses/description/
* */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return [];
    let len = s.length
    let res = []
    const handle = (index, sIndex, tem) => {
        if (index === 4) return sIndex === len ? res.push(tem.join('.')) : null
        let maxI = len - (4 - tem.length) + 1
        let curS = ''
        for (let i = sIndex; i <= maxI; i ++){
            curS += s[i]
            if (curS > 255) break;
            if ((len - i - 1) <= (4 - index - 1) * 3){
                handle(index + 1, i + 1, [...tem, curS])
            }
            if (curS === '0') break;
        }
    }
    handle(0, 0, [])
    return res
};
console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
