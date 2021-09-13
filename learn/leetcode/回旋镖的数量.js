/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/13
 */
/*
* https://leetcode-cn.com/problems/number-of-boomerangs/
* */
var numberOfBoomerangs = function(points) {
    // 组合 A(m, 2) = m * (m - 1)
    if (points.length <= 2) return 0
    let n = points.length
    let map = [], record = 0
    for (let i = 0; i < n; i ++){
        let tem = new Array(n).fill(0)
        let lineMap = {}
        for (let j = 0; j < n; j ++){
            if (j >= i){
                tem[j] = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2)
            }else if (j < i){
                tem[j] = map[j][i]
            }
            lineMap[tem[j]] ? lineMap[tem[j]] ++ : (lineMap[tem[j]] = 1)
        }
        Object.values(lineMap).forEach(v => {
            if (v > 1) record += v * (v - 1)
        })
        map.push(tem)
    }
    return record
};
// 优化
//假设当前同一距离的数量为 n, 回旋镖数量为 n*(n-1), 当再出现一个同一距离时，回旋镖的数量应为 (n+1)*n，与之前相差 (n+1)*n - n*(n-1) = 2*n
// map 比 对象效率更高
// 计算过程不复杂，不需要缓存
var numberOfBoomerangs = function(points) {
    // 组合 A(m, 2) = m * (m - 1)
    if (points.length <= 2) return 0
    let n = points.length
    let record = 0
    let val = 0
    let lineMap = new Map()
    for (let i = 0; i < n; i ++){
        for (let j = 0; j < n; j ++){
            val = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2)
            record += 2 * (lineMap.get(val) || 0)
            lineMap.set(val, (lineMap.get(val) || 0) + 1)
        }
        lineMap.clear()
    }
    return record
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));
console.log(numberOfBoomerangs([[1,1],[2,2],[3,3]]));
console.log(numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]));