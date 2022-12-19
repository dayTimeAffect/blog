/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/8
 */
/*
* https://leetcode.cn/problems/relative-ranks/
* */
var findRelativeRanks = function(score) {
    const map = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal",
    }
    const scoreTem = score.map((v, i) => [v, i])
    scoreTem.sort((a, b) => b[0] - a[0])
    let res = []
    for (let i = 0; i < scoreTem.length; i ++){
        const [,index] = scoreTem[i]
        res[index] = map[i] || String(i + 1)
    }
    return res
};
console.log(findRelativeRanks([10,3,8,9,4]));