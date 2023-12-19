/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/17
 */
/*
* https://leetcode.cn/problems/QC3q1f/
* */
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {
        children: new Array(26)
    }
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curNode = this.root
    for (let i = 0; i < word.length; i ++){
        let index= word[i].charCodeAt(0) - 97
        const next = curNode.children[index]
        if (next){
            curNode = next
        }else {
            curNode.children[index] = {
                isEnd: false,
                val: word[i],
                children: new Array(26),
            }
            curNode = curNode.children[index]
        }
    }
    curNode.isEnd = true
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curNode = this.root
    for (let i = 0; i < word.length; i ++){
        let index= word[i].charCodeAt(0) - 97
        const next = curNode.children[index]
        if (next){
            curNode = next
        }else {
            return false
        }
    }
    return curNode.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curNode = this.root
    for (let i = 0; i < prefix.length; i ++){
        let index= prefix[i].charCodeAt(0) - 97
        const next = curNode.children[index]
        if (next){
            curNode = next
        }else {
            return false
        }
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"))