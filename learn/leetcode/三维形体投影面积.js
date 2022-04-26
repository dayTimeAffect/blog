/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/26
 */
/*
* https://leetcode-cn.com/problems/projection-area-of-3d-shapes/
* */
var projectionArea = function(grid) {
    let x_area = 0, y_area = 0, z_area = 0
    //俯视角，也就是xy平面，柱子个数之和
    z_area = grid.reduce((res, cur) => res + cur.filter(v => v !== 0).length, 0)
    //正视角，也就是xz平面，每行最大值相加
    x_area = grid.reduce((res, cur) => res + Math.max(...cur), 0)
    //侧视角，也就是yz平面，每列最大值相加
    y_area = grid.reduce((res, cur) => cur.map((v, i) => v > (res[i] || 0) ? v : res[i]), []).reduce((res, cur) => res + cur, 0)
    return x_area + y_area + z_area
};
console.log(projectionArea([[1, 0], [0, 2]]));