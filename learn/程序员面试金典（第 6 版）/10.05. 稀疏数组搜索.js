/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/7
 */
/*
* https://leetcode.cn/problems/sparse-array-search-lcci/description/
* */
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
    let left = 0, right = words.length - 1;
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (words[mid] === s){
            return mid
        }
        if (words[mid] === ''){
            let leftMid = mid, rightMid = mid
            while (words[leftMid] === '' && leftMid > left){
                leftMid --
            }
            while (words[rightMid] === '' && rightMid < right){
                rightMid ++
            }
            if (words[leftMid] === s){
                return leftMid
            }
            if (words[rightMid] === s){
                return rightMid
            }
            if (words[leftMid] < s){
                left = rightMid + 1
            }else {
                right = leftMid - 1
            }
        }else if (words[mid] < s){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1
};