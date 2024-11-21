/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/4
 */
/*
* https://leetcode.cn/problems/maximum-length-of-repeated-subarray/description/?envType=study-plan-v2&envId=2024-spring-sprint-100
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let start_map = {}, res = 0, len1 = nums1.length, len2 = nums2.length
    for (let i = 0; i < len2; i ++){
        if (start_map[nums2[i]]){
            start_map[nums2[i]].push(i)
        }else {
            start_map[nums2[i]] = [i]
        }
    }
    for (let i = 0; i < len1; i ++){
        if (start_map[nums1[i]]){
            let tem = start_map[nums1[i]]
            for (let j of tem){
                let step = 1
                while ((i + step < len1) && (j + step < len2) && nums1[i + step] === nums2[j + step]){
                    step ++
                }
                res = Math.max(res, step)
            }
        }
    }
    return res
};
var findLength = function(nums1, nums2) {
    let res = 0
    for (let i = 0; i < nums1.length; i ++){
        let count = 0
        for (let j = i, step = 0; j < nums1.length; j ++, step ++){
            if (nums2[step] === nums1[j]){
                count ++

            }else {
                res = Math.max(res, count)
                count = 0
            }
        }
        res = Math.max(res, count)
    }
    for (let i = 0; i < nums2.length; i ++){
        let count = 0
        for (let j = i, step = 0; j < nums2.length; j ++, step ++){
            if (nums1[step] === nums2[j]){
                count ++
            }else {
                res = Math.max(res, count)
                count = 0
            }
        }
        res = Math.max(res, count)
    }
    return res
};
console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))
console.log(findLength([0,0,0,0,0], [0,0,0,0,0]))
console.log(findLength([0,0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,0,1,0,0]))