/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/15
 */
/*
* https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
* */
var peakIndexInMountainArray = function(arr) {
    // 时间复杂度O(n)
    if (arr.length === 3) return 1
    for (let i = 0, j = 1; i < arr.length; i++, j++){
        if (arr[i] > arr[j]) return i
    }
};
var peakIndexInMountainArray = function(arr) {
    // 二分查找，时间复杂度O(log(n))
    if (arr.length === 3) return 1
    let temI;
    let left = 0, right = arr.length - 1
    while (left < right){
        temI = Math.floor((right - left) / 2) + left
        if (arr[temI] > arr[temI - 1] && arr[temI] < arr[temI + 1]){
            left = temI
        }else if (arr[temI] < arr[temI - 1] && arr[temI] > arr[temI + 1]){
            right = temI
        }else{
            break;
        }
    }
    return temI
};
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));