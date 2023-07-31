/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/10
 */
/*
* https://leetcode.cn/problems/qn8gGX/
* */
var kSmallestPairs = function(nums1, nums2, k) {
    let resArr = []
    for (let i of nums1){
        for (let j of nums2){
            resArr.push([i, j])
        }
    }
    return resArr.sort((a, b) => a[0] + a[1] - b[0] - b[1]).slice(0, k)
};
// console.log(kSmallestPairs([1,7,11], [2,4,6], 3));
console.log(kSmallestPairs([1,1,2], [1,2,3], 10));