/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/words-frequency-lcci/description/
* */
/**
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
    this.map = {}
    for (let i = 0; i < book.length; i ++){
        this.map[book[i]] = (this.map[book[i]] || 0) + 1
    }
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
    return this.map[word] || 0
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */