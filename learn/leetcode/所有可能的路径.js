/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/25
 */
/*
* https://leetcode-cn.com/problems/all-paths-from-source-to-target/
* */
var allPathsSourceTarget = function(graph) {
    let n = graph.length
    let res = []
    const findPath = (cur, path) => {
        if (cur === n - 1) return res.push(path)
        for (let i = 0; i < graph[cur].length; i ++){
            findPath(graph[cur][i], [...path, graph[cur][i]])
        }
    }
    findPath(0, [0])
    return res
};
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[1, 2], [3], [], []]));
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));