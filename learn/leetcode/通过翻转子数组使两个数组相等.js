/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/24
 */
/*
* https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays/
* */
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) return false
    let map = {}
    for (let i = 0; i < target.length; i ++){
        if (map[target[i]]){
            map[target[i]] ++
        }else {
            map[target[i]] = 1
        }
        if (map[arr[i]]){
            map[arr[i]] --
        }else {
            map[arr[i]] = -1
        }
    }
    return !Object.values(map).find(v => v !== 0)
};