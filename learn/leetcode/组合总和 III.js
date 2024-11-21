/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/21
 */
/*
* https://leetcode.cn/problems/combination-sum-iii/description/
* */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if (new Array(k).fill(0).map((v, i) => i + 1).reduce((a, b) => a + b) > n) return []
    let tem = [], res = []
    const handle = (k, start, n) => {
        if (k === 0 && n === 0){
            return res.push([...tem])
        }
        for (let i = start; i <= 9; i ++){
            if (k - 1 < 0 || n - i < 0) return ;
            tem.push(i)
            handle(k - 1, i + 1, n - i)
            tem.pop()
        }
    }
    handle(k, 1, n)
    return res
};
console.log(combinationSum3(3, 7));