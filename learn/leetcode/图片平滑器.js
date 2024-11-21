/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/17
 */
/*
* https://leetcode.cn/problems/image-smoother/description/
* */
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let m = img.length, n = img[0].length
    let res = []
    for (let i = 0; i < m; i ++){
        res.push([])
        for (let j = 0; j < n; j ++){
            let rangeI = [i], rangeJ = [j], count = 0
            if (i > 0) rangeI.push(i - 1)
            if (i < m - 1) rangeI.push(i + 1)
            if (j > 0) rangeJ.push(j - 1)
            if (j < n - 1) rangeJ.push(j + 1)
            for (let singleI of rangeI){
                for (let singleJ of rangeJ){
                    count += img[singleI][singleJ]
                }
            }
            res[i][j] = Math.floor(count/ (rangeI.length * rangeJ.length))
        }
    }
    return res
};