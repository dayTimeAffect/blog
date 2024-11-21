/**
 * @Author: dayTimeAffect
 * @Date: 2024/8/1
 */
/*
* https://leetcode.cn/problems/deep-dark-fraction/description/
* */
/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
    if (cont.length === 1) return [cont[0], 1]
    let res = [0, 0]
    for (let i = cont.length - 1; i >= 0; i --){
        if (cont[i] !== 0){
            if (res[0] !== 0){
                res = [cont[i] * res[1] + res[0], res[1]]
            }else {
                res = [1, cont[i]]
            }
        }
        if (i !== 0 && i !== cont.length - 1){
            res = [res[1], res[0]]
        }
    }
    return res
};
console.log(fraction([3, 2, 0, 2]));
console.log(fraction([0, 0, 3]));