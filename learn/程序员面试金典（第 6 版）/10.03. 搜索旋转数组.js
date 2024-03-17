/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/7
 */
/*
* https://leetcode.cn/problems/search-rotate-array-lcci/description/
* */
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target){
            let leftMid = mid, rightMid = mid
            while (leftMid !== 0 && arr[leftMid - 1] === target){
                leftMid --
            }
            while (rightMid !== 0 && arr[rightMid + 1 > arr.length - 1 ? 0 : rightMid + 1] === target){
                rightMid = rightMid + 1 > arr.length - 1 ? 0 : rightMid + 1
            }
            return Math.min(leftMid, rightMid)
        }

        if (arr[mid] > arr[left]) {
            // 左边升序
            if (arr[left] <= target && target < arr[mid]){
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else if (arr[mid] < arr[left]) {
            // 右边升序
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }else {
            // 无法判断
            left ++
        }
    }
    return -1
};
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([5,5,5,1,2,3,4,5], 5));
console.log(search([2, 1, 2, 2, 2], 2));