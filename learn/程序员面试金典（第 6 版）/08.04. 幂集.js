/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/18
 */
/*
* https://leetcode.cn/problems/power-set-lcci/description/
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let handleArr = [...new Set(nums)]
    let res = [[]]
    const handle = (index, path) => {
        if (index >= handleArr.length) return
        for (let i = index; i < handleArr.length; i ++){
            path.push(handleArr[i])
            res.push([...path])
            handle(i + 1, path)
            path.pop()
        }
    }
    handle(0, [])
    return res
};
console.log(subsets([1, 2, 3]));