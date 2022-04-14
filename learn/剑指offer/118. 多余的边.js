/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/1
 */
/*
* https://leetcode-cn.com/problems/7LpjUW/
* */
var findRedundantConnection = function(edges) {
    let len = edges.length, map = new Array(len + 1).fill(0).map((v, i) => i)
    const find = (index) => {
        if (map[index] !== index){
            map[index] = find(map[index])
        }
        return map[index]
    }
    const union = (index1, index2) => {
        map[map[index1]] = find(index2)
    }

    for (let i = 0; i < len; i ++){
        const [node1, node2] = edges[i]
        if (find(node1) === find(node2)){
            return edges[i]
        }
        union(node1, node2)
    }
};
console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]));
console.log(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]));