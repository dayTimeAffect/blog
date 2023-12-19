/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/25
 */
/*
* https://leetcode.cn/problems/find-the-punishment-number-of-an-integer/?envType=daily-question&envId=2023-10-25
* */
let hash = {}
var punishmentNumber = function(n) {
    let res = 0
    const dfs = (s, pos, tot, target) => {
        if (pos === s.length){
            return tot === target
        }
        let sum = 0
        for (let i = pos; i < s.length; i ++){
            sum = sum * 10 + parseInt(s[i])
            if (sum + tot > target) break;
            if (dfs(s, i + 1, sum + tot, target)) {
                hash[s] = true
                return true;
            }
        }
        return false
    }
    for (let i = 1; i <= n; i ++){
        if (hash[String(i * i)] !== undefined){
            if (hash[String(i * i)]) res += (i * i)
        }else {
            if (dfs(String(i * i), 0, 0, i)){
                res += (i * i)
            }
        }

    }
    return res
};
console.log(punishmentNumber(37));