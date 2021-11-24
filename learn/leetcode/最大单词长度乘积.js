/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/17
 */
/*
* https://leetcode-cn.com/problems/maximum-product-of-word-lengths/
* */
var maxProduct = function(words) {
    let map = [], max = 0;
    for (let i = 0; i < words.length; i ++) map.push(new Set(words[i].split('')))
    for (let i = 0; i < words.length - 1; i ++){
        for (let j = i + 1; j < words.length; j ++){
            if (words[i].length * words[j].length < max) continue;
            let index = 0, flag = true, tem = Array.from(map[i])
            while (index < tem.length && flag){
                if (map[j].has(tem[index])) {
                    flag = false
                }
                index ++
            }
            if (flag) max = Math.max(words[i].length * words[j].length, max)
        }
    }
    return max
};
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]));
console.log(maxProduct(["a","aa","aaa","aaaa"]));