/*
* https://leetcode-cn.com/problems/group-anagrams-lcci/
* */
var groupAnagrams = function(strs) {
    let hashMap = {}
    for (let i = 0; i < strs.length; i ++){
        let map = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j ++) {
            map[strs[i][j].charCodeAt() - 97] += 1;
        }
        hashMap[JSON.stringify(map)] ? hashMap[JSON.stringify(map)].push(strs[i]) : hashMap[JSON.stringify(map)] = [strs[i]]
    }
    return Object.values(hashMap)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
