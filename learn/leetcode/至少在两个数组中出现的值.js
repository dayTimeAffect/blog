/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/29
 */
/*
* https://leetcode.cn/problems/two-out-of-three/
* */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const handle = (arr) => {
        let res = new Array(101).fill(0)
        arr.forEach(v => {
            const map = {}
            v.forEach(n => {
                if (!map[n]) {
                    res[n] ++
                    map[n] = true
                }
            })
        })
        return res.reduce((res, next, i) => (next >= 2 ? [...res, i] : res), [])
    }
    return handle([nums1, nums2, nums3])
};