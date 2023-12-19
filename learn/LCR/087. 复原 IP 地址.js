/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/13
 */
/*
* https://leetcode.cn/problems/0on3uN/
* */
var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return []
    const res = [], tem = []
    const handle = (index) => {
        if (index === s.length && tem.length === 4) return res.push(tem.join('.'))
        if (index === s.length || tem.length > 4) return ;
        let cur = ''
        for (let i = index; i < s.length; i ++){
            if (cur === '0' || cur.length >= 3) break;
            cur += s[i]
            if (parseInt(cur) > 255) break;
            tem.push(cur)
            handle(i + 1)
            tem.pop()
        }
    }
    handle(0)
    return res
};
console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("10203040"));