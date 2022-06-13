/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/8
 */
/*
* https://leetcode.cn/problems/valid-boomerang/
* */
var isBoomerang = function(points) {
    let [[x1, y1], [x2, y2], [x3, y3]] = points

    return ((x1 * y2 - x2 * y1) + (x2 * y3 - x3 * y2) + (x3 * y1 - x1 * y3)) / 2 !== 0
};
console.log(isBoomerang([[1,1],[2,3],[3,2]]));
console.log(isBoomerang([[1,1],[2,2],[3,3]]));
console.log(isBoomerang([[1,1],[2,2],[7,7]]));