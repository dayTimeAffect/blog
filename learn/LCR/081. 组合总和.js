/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/28
 */
/*
* https://leetcode.cn/problems/Ygoe9J/
* */
var combinationSum = function(candidates, target) {
    const res = [], tem = []
    const handle = (index, curVal) => {
        if (curVal > target) return ;
        if (curVal === target) return res.push([...tem])
        for (let i = index; i < candidates.length; i ++){
            tem.push(candidates[i])
            handle(i, curVal + candidates[i])
            tem.pop()
        }
    }
    handle(0, 0)
    return res
};
console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));