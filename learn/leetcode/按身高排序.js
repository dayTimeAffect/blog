/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/25
 */
/*
* https://leetcode.cn/problems/sort-the-people/
* */
var sortPeople = function(names, heights) {
    let map = heights.reduce((o, n, i) => {
        o[n] = names[i]
        return o
    }, {})
    heights = heights.sort((a, b) => b - a)
    return heights.map(v => map[v])
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));