/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/3
 */
/*
* https://leetcode-cn.com/problems/smallest-k-lcci/
* */
var smallestK = function(arr, k) {
    // 基于快速排序。
    if (k === 0 || arr.length === 0) return []
    if (arr.length === k) return arr
    let res = [], len = arr.length, less = [], greater = [], equal = [], base = arr[0]
    for (let i = 0; i < len; i ++){
        if (arr[i] > base){
            greater.push(arr[i])
        }else if (arr[i] < base){
            less.push(arr[i])
        }else{
            equal.push(arr[i])
        }
    }
    if (less.length > k){
        res.push(...smallestK(less, k))
    }else{
        res.push(...less, ...equal, ...smallestK(greater, k - less.length - equal.length))

    }
    return res.slice(0, k)
};
console.log(smallestK([1,3,5,7,2,4,6,8], 4));