/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/11
 */
/*
* https://leetcode-cn.com/problems/combination-sum-ii/
* */
var combinationSum2 = function(candidates, target) {
    //先排序，减少无效遍历次数（减枝）
    let sortArr = candidates.sort((a, b) => a - b), res = [], tem = [], len = candidates.length, map = []
    const combinationSum = function (index1, index2, sum){
        if (sum > target) return;
        if (sum === target) return res.push([...tem])
        map[index1] = new Set()
        for (let i = index2; i < len; i ++){
            if (map[index1].has(sortArr[i])) continue;
            map[index1].add(sortArr[i])
            tem.push(sortArr[i])
            combinationSum(index1 + 1, i + 1, sum + sortArr[i])
            tem.pop()
        }
    }
    combinationSum(0, 0, 0)
    return res
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([2,5,2,1,2], 5));