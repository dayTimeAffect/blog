/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/21
 */
/*
* https://leetcode.cn/problems/maximum-score-from-removing-stones/
* */
var maximumScore = function(a, b, c) {
    const handle = (a, b, c, score) => {
        if (Math.max(a, b, c) === (a + b + c)) return score
        if (a >= c && b >= c){
            return handle(a - 1, b - 1, c, score + 1)
        }
        if (a >= b && c >= b){
            return handle(a - 1, b, c - 1, score + 1)
        }
        if (b >= a && c >= a){
            return handle(a, b - 1, c - 1, score + 1)
        }
    }
    return handle(a, b, c, 0)
};
console.log(maximumScore(2, 4, 6));
console.log(maximumScore(4, 4, 6));
