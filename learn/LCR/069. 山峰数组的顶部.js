/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/31
 */
/*
* https://leetcode.cn/problems/B1IidL/
* */
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]){
            return mid
        }
        if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]){
            left = mid
        }else {
            right = mid
        }
    }
    return left
};
console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([1,3,5,4,2]));
console.log(peakIndexInMountainArray([0,10,5,2]));
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));