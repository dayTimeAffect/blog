/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/5
 */
/*
* https://leetcode-cn.com/problems/find-eventual-safe-states/
* */
var eventualSafeNodes = function(graph) {
    let res = []
    let n = graph.length
    let map = new Array(n).fill(0)
    let findSafe= (target) => {
        if (map[target] === 1) return false
        if (map[target] === 2) return true
        map[target] = 1
        let tem = graph[target]
        for (let i = 0; i < tem.length; i ++){
            if (!findSafe(tem[i])){
                return false
            }
        }
        map[target] = 2
        return true
    }
    for (let i = 0; i <= n - 1; i ++){
        if (findSafe(i)){
            res.push(i)
        }
    }
    return res
};
console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]));
console.log(eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]));
console.log(eventualSafeNodes([[0],[2,3,4],[3,4],[0,4],[]]));