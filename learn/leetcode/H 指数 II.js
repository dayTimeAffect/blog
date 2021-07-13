/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/13
 */
/*
* https://leetcode-cn.com/problems/h-index-ii/
* */
var hIndex = function(citations) {
    let maxH = 0
    let hMap = {}
    let index = 0
    for (let i = citations.length - 1; i >= 0; i --){
        index ++
        hMap[citations[i]]  = hMap[citations[i]] ? hMap[citations[i]] + 1 : index
        if (citations[i] >= hMap[citations[i]]) maxH = hMap[citations[i]]
        else return maxH
    }
    return maxH
};
var hIndex = function(citations) {
    let len = citations.length
    let left = 0, right = len - 1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (citations[mid] >= len - mid){
            right = mid - 1
        }else {
            left = mid + 1
        }
    }
    return len - left
};
console.log(hIndex([0, 1, 4, 5, 6, 6, 6]));