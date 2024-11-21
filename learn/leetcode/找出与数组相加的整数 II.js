/**
 * @Author: dayTimeAffect
 * @Date: 2024/8/8
 */
/*
* https://leetcode.cn/problems/find-the-integer-added-to-array-ii/description/
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
    let sort_nums1 = nums1.sort((a, b) => a - b)
    let sort_nums2 = nums2.sort((a, b) => a - b)
    let res = Infinity
    for (let i = 0; i <= 2; i ++){
        let index = 0
        let d = sort_nums2[index] - sort_nums1[i]
        for (let j = i; j < sort_nums1.length; j ++){
            if (d === (sort_nums2[index] - sort_nums1[j])){
                index ++
            }
        }
        if (index === sort_nums2.length){
            res = Math.min(res, d)
        }
    }
    return res
};
console.log(minimumAddedInteger([4,20,16,12,8], [14,18,10]))
console.log(minimumAddedInteger([3,5,5,3], [7,7]))
console.log(minimumAddedInteger([4,6,3,1,4,2,10,9,5], [5,10,3,2,6,1,9]))