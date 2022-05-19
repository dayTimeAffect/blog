/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/27
 */
/*
* https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
* */
var pacificAtlantic = function(heights) {
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let m = heights.length, n = heights[0].length, res = []
    let pacific = new Array(m).fill(0).map(v => new Array(n).fill(false))
    let atlantic = new Array(m).fill(0).map(v => new Array(n).fill(false))
    const dfs = (i, j, map) => {
        if (map[i][j]) return;
        map[i][j] = true
        for (let dir of dirs){
            let x = dir[0] + i, y = dir[1] + j
            if (x >= 0 && x < m && y >= 0 && y < n &&  heights[x][y] >= heights[i][j]) dfs(x, y, map)
        }
    }
    for (let i = 0; i < m; i ++){
        dfs(i, 0, pacific)
        dfs(i, n - 1, atlantic)
    }
    for (let i = 0; i < n; i ++){
        dfs(0, i, pacific)
        dfs(m - 1, i, atlantic)
    }
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (pacific[i][j] && atlantic[i][j]){
                res.push([i, j])
            }
        }
    }
    return res
};
console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
// console.log(pacificAtlantic([[10,10,10],[10,1,10],[10,10,10]]));
// console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
// console.log(pacificAtlantic([[1,2,3],[8,9,4],[7,6,5]]));
