/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/4
 */
/*
* https://leetcode.cn/problems/sub-sort-lcci/description/
* */
/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
    if (array.length < 3) return [-1, -1]
    let left = 0, right = array.length - 1
    while (left <= right){
        // 左侧找到第一个不是有序的
        if (array[left] <= array[left + 1]) {
            left++
        }
        // 右侧找到第一个不是有序的
        if (array[right] >= array[right - 1]){
            right --
        }
        if (array[left] > array[left + 1] && array[right] < array[right - 1]){
            break
        }
    }
    if (left > right) return [-1, -1]
    let min = array[left], max = array[right]
    for (let i = left; i <= right; i ++){
        min = Math.min(min, array[i])
        max = Math.max(max, array[i])
    }
    while (left >= 0 && array[left] > min){
        left --
    }
    while (right < array.length && array[right] < max){
        right ++
    }
    return [left + 1, right - 1]
};