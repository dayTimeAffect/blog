/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/15
 */
/*
* https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/
* */
var luckyNumbers  = function(matrix) {
    let minRowIndex = new Array(matrix.length).fill(Infinity), maxColIndex = new Array(matrix[0].length).fill(-Infinity), m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            let tem = matrix[i][j]
            if (minRowIndex[i] > tem){
                minRowIndex[i] = tem
            }
            if (maxColIndex[j] < tem){
                maxColIndex[j] = tem
            }
        }
    }
    const hash = new Set(minRowIndex)
    return maxColIndex.filter(v => hash.has(v))
};
console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
console.log(luckyNumbers([[7,8],[1,2]]));