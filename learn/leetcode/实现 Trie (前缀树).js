/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/20
 */
/*
* https://leetcode.cn/problems/implement-trie-prefix-tree/description/
* */

var Trie = function() {
    this.trie = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.trie
    for (let i = 0; i < word.length; i ++){
        if (!cur[word[i]]){
            cur[word[i]] = {}
        }
        cur = cur[word[i]]
    }
    cur.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.trie
    for (let i = 0; i < word.length; i ++){
        if (!cur[word[i]]){
            return false
        }
        cur = cur[word[i]]
    }
    return !!cur.isEnd
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.trie
    for (let i = 0; i < prefix.length; i ++){
        if (!cur[prefix[i]]){
            return false
        }
        cur = cur[prefix[i]]
    }
    return !!cur
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */