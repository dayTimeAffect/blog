/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/17
 */
/*
* https://leetcode-cn.com/problems/combination-sum/
* */
var combinationSum = function(candidates, target) {
    //先排序，减少无效遍历次数（减枝）
    let sortArr = candidates.sort((a, b) => a - b)
    let res = []
    //构造组合，只有target（剩余值）为0时，组合构成。
    const createCombination = (combination,target, index) => {
        if (target === 0) res.push(combination)
        //为了减少重复构成，不可重复比上一次还小的值。index为此次遍历的最小值（减枝）
        for (let i = index; sortArr[i] <= target; i ++){
            createCombination([...combination, sortArr[i]], target - sortArr[i], i)
        }
    }
    createCombination([], target, 0)
    return res
};
console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));
console.log(combinationSum([2], 1));