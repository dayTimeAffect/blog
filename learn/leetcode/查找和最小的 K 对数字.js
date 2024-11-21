/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/11
 */
/*
* https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/description/
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let res = [], len1 = nums1.length, len2 = nums2.length
    let tem = new Array(len1).fill(0)
    while (res.length < k){
        let s_1 = -Infinity, s_2 = -Infinity;
        for (let j = 0; j < len1; j ++){
            if (tem[j] === len2) continue;
            if (s_1 === -Infinity){
                s_1 = j
                s_2 = tem[j]
            } else if (nums1[j] + nums2[tem[j]] < nums1[s_1] + nums2[s_2]){
                s_1 = j
                s_2 = tem[j]
            }

        }
        let repeat_val_1 = nums1[s_1], repeat_val_2 = nums2[s_2], start_s_2 = s_2
        while (nums1[s_1] === repeat_val_1){
            while (nums2[s_2] === repeat_val_2 && res.length < k){
                res.push([nums1[s_1], nums2[s_2]])
                s_2 ++
                tem[s_1] ++
            }
            s_2 = start_s_2
            s_1 ++
        }
    }
    return res
};
// console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)); // [[1,2],[1,4],[1,6]]
// console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)); // [[1,1],[1,1]]
console.log(kSmallestPairs([1,2,4,5,6], [3,5,7,9], 5));
// console.log(kSmallestPairs([0,0,0,0,0], [-3,22,35,56,76], 23));
