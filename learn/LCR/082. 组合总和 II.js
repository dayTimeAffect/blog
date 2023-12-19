/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/4
 */
/*
* https://leetcode.cn/problems/4sjJUc/
* */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    let res = [], tem = []
    const handle = (index, curVal) => {
        if (curVal === target) res.push([...tem])
        let map = new Set()
        for (let i = index; i < candidates.length; i ++){
            if (map.has(candidates[i])) continue;
            map.add(candidates[i])
            if (curVal + candidates[i] <= target){
                tem.push(candidates[i]);
                handle(i + 1, curVal + candidates[i])
                tem.pop();
            }else {
                break;
            }
        }
    }
    handle(0, 0)
    return res
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8));