/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/14
 */
/*
* https://leetcode.cn/problems/0H97ZC/
* */
var relativeSortArray = function(arr1, arr2) {
    let map = {}
    for (let i = 0; i < arr2.length; i ++){
        map[arr2[i]] = i
    }
    for (let i = 0; i < arr1.length; i ++){
        for (let j = i + 1; j < arr1.length; j ++){
            //默认
            let min = arr1[i], max = arr1[j]
            if (map[arr1[i]] >= 0 && map[arr1[j]] >= 0){
                //都在arr2中，按arr2中顺序排
                if (map[arr1[i]] > map[arr1[j]]){
                    min = arr1[j]
                    max = arr1[i]
                }
            }else if (map[arr1[i]] >= 0){
                //arr1[i]在arr[2]中，那arr1[j]放后面
                min = arr1[i]
                max = arr1[j]
            }else if (map[arr1[j]] >= 0){
                //arr1[j]在arr[2]中，那arr1[i]放后面
                min = arr1[j]
                max = arr1[i]
            }else {
                //都不在。正常排
                if (arr1[i] > arr1[j]){
                    min = arr1[j]
                    max = arr1[i]
                }
            }
            arr1[i] = min
            arr1[j] = max
        }
    }
    return arr1
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));