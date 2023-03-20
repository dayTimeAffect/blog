/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/28
 */
/*
* https://leetcode.cn/problems/merge-similar-items/
* */
var mergeSimilarItems = function(items1, items2) {
    let map = {}
    for (let i = 0; i < items1.length; i ++){
        map[items1[i][0]] = (map[items1[i][0]] || 0) + items1[i][1]
    }
    for (let i = 0; i < items2.length; i ++){
        map[items2[i][0]] = (map[items2[i][0]] || 0) + items2[i][1]
    }
    return Object.entries(map).map(([v, w]) => [v / 1, w])
};
// console.log(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]));
// console.log(mergeSimilarItems([[1,1],[3,2],[2,3]], [[2,1],[3,2],[1,3]]));
console.log(mergeSimilarItems([[1,3],[2,2]], [[7,1],[2,2],[1,4]]));