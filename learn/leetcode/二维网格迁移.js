/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/20
 */
/*
* https://leetcode.cn/problems/shift-2d-grid/
* */
var shiftGrid = function(grid, k) {
    let tem = grid.reduce((next, cur) => (next.push(...cur), next), []), m = grid.length, n = grid[0].length, len = tem.length
    const resTem = [...tem.slice(len - k % len), ...tem.slice(0, len - k % len)]
    return new Array(m).fill(0).map((v, i) => {
        return resTem.slice(i * n, (i + 1) * n)
    })
};
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1));
console.log(shiftGrid([[1],[2],[3],[4],[7],[6],[5]], 1));