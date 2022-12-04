/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/26
 */
/*
* https://leetcode.cn/problems/top-k-frequent-elements/
* */
var topKFrequent = function(nums, k) {
    let map = new Map(), res = []
    nums.forEach(v => {
        map.set(v, (map.get(v) || 0) + 1)
    })
    const mapArr = Array.from(map)
    const bucketArr = new Array(nums.length + 1).fill(0).map(() => new Array())
    mapArr.forEach(v => {
        bucketArr[v[1]].push(v[0])
    })
    for (let i = nums.length; i >= 0; i --){
        res.push(...bucketArr[i])
    }
    return res.slice(0, k)
};
console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([1, 1], 1));