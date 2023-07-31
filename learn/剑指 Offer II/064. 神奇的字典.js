/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/17
 */
/*
* https://leetcode.cn/problems/US1pGT/
* */
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.arr = []
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.arr = dictionary
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for (let i = 0; i < this.arr.length; i ++){
        if (this.arr[i].length !== searchWord.length){
            continue;
        }else {
            let flag = 0
            for (let j = 0; j < searchWord.length; j ++){
                flag += searchWord[j] !== this.arr[i][j]
            }
            if (flag === 1){
                return true
            }
        }
    }
    return false
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */