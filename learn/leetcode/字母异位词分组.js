/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/21
 */
/*
* https://leetcode.cn/problems/group-anagrams/
* */
var groupAnagrams = function(strs) {
    let map = {}
    for (let i = 0; i < strs.length; i ++){
        let arr = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j ++){
            arr[strs[i].charCodeAt(j) - 97] ++
        }
        map[JSON.stringify(arr)] = map[JSON.stringify(arr)] ? [...map[JSON.stringify(arr)], strs[i]] : [strs[i]]
    }
    console.log(map);
    return Object.values(map)
};
console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));