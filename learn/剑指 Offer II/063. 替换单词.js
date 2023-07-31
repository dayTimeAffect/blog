/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/17
 */
/*
* https://leetcode.cn/problems/UhWRSj/
* */
var Trie = function() {
    this.root = {
        children: new Array(26)
    }
};
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
Trie.prototype.search = function(word) {
    let curNode = this.root, tem = ''
    for (let i = 0; i < word.length; i ++){
        let index= word[i].charCodeAt(0) - 97
        const next = curNode.children[index]
        if (next){
            if (next.isEnd){
                tem += next.val
                return tem
            }else {
                tem += next.val
            }
            curNode = next
        }else {
            return word
        }
    }
    return word
};
var replaceWords = function(dictionary, sentence) {
    let trie = new Trie(), sentenceArr = sentence.split(' '), res = []
    for (let i = 0; i < dictionary.length; i ++){
        trie.insert(dictionary[i])
    }
    for (let i = 0; i < sentenceArr.length; i ++){
        res[i] = trie.search(sentenceArr[i])
    }
    return res.join(' ')
};
console.log(replaceWords(["cat","bat","rat"],"the cattle was rattled by the battery"));