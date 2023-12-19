/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/30
 */
/*
* https://leetcode.cn/problems/route-between-nodes-lcci/
* */
/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function(n, graph, start, target) {
    let map = {}
    for (let [a, b] of graph){
        if (a >= n || b >= n) continue;
        if (!map[a]) map[a] = []
        map[a].push(b)
    }
    let visited = new Set(), queue = [start]
    while (queue.length){
        let cur = queue.shift()
        if (cur === target) return true
        if (visited.has(cur)) continue;
        visited.add(cur)
        if (map[cur]){
            queue.push(...map[cur])
        }
    }
    return false
};