/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/3
 */
/*
* https://leetcode.cn/problems/IDBivT/
* */
var generateParenthesis = function(n) {
    let res = new Set()
    const create = (cur, l, r) => {
        if (l === 0 && r === 0){
            res.add(cur)
        }
        if (l){
            create(cur + '(', l - 1, r)
        }
        if (r && l < r){
            create(cur + ')', l, r - 1)
        }
    }
    create('', n, n)
    return Array.from(res)
};
console.log(generateParenthesis(3));