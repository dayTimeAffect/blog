/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/24
 */
/*
* https://leetcode.cn/problems/iSwD2y/
* */
const Trie = function (){
    //从单词尾部开始的前缀树
    this.root = {
        children: {}
    }
    this.add = function (str){
        let next = this.root
        for (let i = str.length - 1; i >= 0; i --){

            if (next.children[str[i]]){
                next = next.children[str[i]]
            }else {
                next.children[str[i]] = {
                    val: str[i],
                    children: {}
                }
                next = next.children[str[i]]
            }
        }
    }
    this.search = function (str){
        let next = this.root
        for (let i = str.length - 1; i >= 0; i --){
            if (next.children[str[i]]){
                next = next.children[str[i]]
            }else {
                return false
            }
        }
        //判断接下来还有字母，就说明，存在比当前查找单词更长的单词，那么当前单词可以为其他单词的尾部
        return Object.keys(next.children).length > 0
    }
}
var minimumLengthEncoding = function(words) {
    let handleArr = Array.from(new Set(words))
    let trie = new Trie()
    let sLength = 0
    for (let word of handleArr){
        trie.add(word)
    }
    for (let word of handleArr){
        if (!trie.search(word)){
            sLength += (word.length + 1)
        }
    }
    return sLength
};
console.log(minimumLengthEncoding(["time", "me", "bell"]))
console.log(minimumLengthEncoding(["t"]))