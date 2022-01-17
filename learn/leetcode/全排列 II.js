/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/27
 */
/*
* https://leetcode-cn.com/problems/permutations-ii/
* */
/*var permuteUnique = function(nums) {
    let res = [], map = {}
    const combination = (cur, nextArr) => {
        map[cur.length] = new Set()
        if (nextArr.length === 1) return res.push([...cur, ...nextArr])
        for (let i = 0; i <= nextArr.length - 1; i ++){
            if (map[cur.length].has(nextArr[i])) continue;
            map[cur.length].add(nextArr[i])
            let tem = [...nextArr]
            tem.splice(i, 1)
            combination([...cur, nextArr[i]], tem)
        }
    }
    combination([], nums)
    return res
};*/
var permuteUnique = function(nums) {
    let res = [], tem = [], len = nums.length, map = []
    const backtracking = (used) => {
        map[tem.length] = new Set()
        if (tem.length === len) return res.push([...tem])
        for (let i = 0; i < len; i ++){
            if (map[tem.length].has(nums[i])) continue;
            if (used[i]) continue;
            map[tem.length].add(nums[i])
            used[i] = true
            tem.push(nums[i])
            backtracking(used)
            tem.pop()
            used[i] = false
        }
    }
    backtracking([])
    return res
};
console.log(permuteUnique([1,1,3]));