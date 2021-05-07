/*
* https://leetcode-cn.com/problems/merge-sorted-array/
* */
var merge = function(nums1, m, nums2, n) {
    // 简单做法可以先合并数组再排序，时间复杂度是排序算法的复杂度
    // 采用逆向双指针，从尾部开始从大到小排列，时间复杂度为O(n)
    if (n === 0) return nums1
    let i = m + n;
    while (i !== 0){
        i --
        if (m === 0) {
            nums1[i] = nums2[n - 1]
            n --
            continue;
        }
        if (n === 0) {
            nums1[i] = nums1[m - 1]
            m --
            continue;
        }
        if (nums1[m - 1] < nums2[n - 1]){
            nums1[i] = nums2[n - 1]
            n --
        }else{
            nums1[i] = nums1[m - 1]
            m --
        }
    }
    return nums1
};
console.log(merge([0], 0, [1], 1));