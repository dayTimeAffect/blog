/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/16
 */
/*
* https://leetcode.cn/problems/re-space-lcci/description/
* */
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    if (!sentence) return 0
    const dictionaryTree = {}, dp = new Array(sentence.length).fill(Infinity)
    for (let word of dictionary){
        let tem = dictionaryTree
        for (let char of word){
            if (!tem[char]) tem[char] = {}
            tem = tem[char]
        }
        tem.isEnd = true
    }
    for (let i = sentence.length - 1; i >= 0; i --){
        dp[i] = (dp[i + 1] || 0) + 1
        if (dictionaryTree[sentence[i]]){
            let j = i, tree = dictionaryTree, flag = true
            while (tree[sentence[j]]){
                tree = tree[sentence[j]]
                if (tree.isEnd){
                    flag = false
                    dp[i] = Math.min(dp[i], dp[j + 1] || 0)
                }
                j ++
            }
        }
    }
    return dp[0];
};
// var respace = function(dictionary, sentence) {
//     if (!sentence) return 0
//     const dictionaryTree = {}, dp = new Array(sentence.length).fill(Infinity)
//     for (let word of dictionary){
//         let tem = dictionaryTree
//         for (let i = word.length - 1; i >= 0; i --){
//             if (!tem[word[i]]) tem[word[i]] = {}
//             tem = tem[word[i]]
//         }
//         tem.isStart = true
//     }
//     for (let i = 0; i < sentence.length; i ++){
//         if (!dictionaryTree[sentence[i]]){
//             dp[i] = (dp[i - 1] || 0) + 1
//         }else {
//             let j = i, tree = dictionaryTree, flag = true
//             while (tree[sentence[j]]){
//                 tree = tree[sentence[j]]
//                 if (tree.isStart){
//                     flag = false
//                     dp[i] = Math.min(dp[i], dp[j - 1] || 0)
//                 }
//                 j --
//             }
//             if (flag){
//                 dp[i] = (dp[i - 1] || 0) + 1
//             }
//
//         }
//     }
//     return dp[sentence.length - 1]
// };

// console.log(respace(["mztt","ui","tial"], ""));
// console.log(respace(["abcd", "ab", "def"], "abcdef"));
// console.log(respace(["potimzz"], "potimzzpotimzz"));
// console.log(respace(["looked","just","like","her","brother"], "jesslookedjustliketimherbrother"));
// console.log(respace(["vprkj","sqvuzjz","ptkrqrkussszzprkqrjrtzzvrkrrrskkrrursqdqpp","spqzqtrqs","rkktkruzsjkrzqq","rk","k","zkvdzqrzpkrukdqrqjzkrqrzzkkrr","pzpstvqzrzprqkkkd","jvutvjtktqvvdkzujkq","r","pspkr","tdkkktdsrkzpzpuzvszzzzdjj","zk","pqkjkzpvdpktzskdkvzjkkj","sr","zqjkzksvkvvrsjrjkkjkztrpuzrqrqvvpkutqkrrqpzu"], "rkktkruzsjkrzqqzkvdzqrzpkrukdqrqjzkrqrzzkkrr"));
// console.log(respace(["frrrbbrrbfrfqqbbbrb","qr","b","rf","qqbbbbfrqbrrqrffbrqqqbqqfqfrr","r","ffqq","bffbqfqqbrrrf","fq","qfr","fr","rqrrbfbfq","r","f","qbqbrbrbqfqbbbfbbbfbq","bqqbbbqrbbrf","f"], "bqqffbqbbfqrfrrrbbrrbfrfqqbbbrbfqfffffrfqfqfffffrrfqfrrqbqfrbfrqqrfrbrbbqbqbqqfqrfbfrfr"));
// console.log(respace(["bt","vbtbvtvvbbvtbvvbbbvbtbbv","bvvbbbvvvbvttbtbvtvtvvbttbbbtvvvb","btttbvbbbtbbtbvvttbvbvtvbtbbttb","bt","vvbvbvbvtbvbvvvvtv","tbvvvtttvtbvbtttvvbtvvvvtvvbvvtvvbbvbbbvb","v","bvb","vvtbvtvbttbttvvbvttbt","btbtbtttvbbtbttbtvvttbvtbtvtbvvtbbbb","bttbvbbttvvbtvvvvb","bvvbvbvttbvtbvvtbttvvvvtvbtvbttbbvvtvtvv","vbtttt","btbvbbbvbtvtbvvv","b","tbtbtv","vbvbbvvbvbbvvb","vbvvtvbvbvbttvbvbtvbtbtvtbvbbtb","bvvbvvttttttbtvvvttvbvtvvbvtbtvtbvttvvtbt","bvtbttv","bbbt","vtt","ttvv","b","vbb","vtvvbtttvtbbvvbbtbb","vvv","vvvvbbbtbbbvbbbb","ttvvbtvv","v","btvbbvtbbvbvtvttvvbbbtbvvvtbtb","vv","btbttbtbbvbvvbvttbttvtbbtbvtttvbbtbbtvtvvvvbbttvtvvbbbv","ttvbbbbttbtbtb","tvvbvbvvb","vv","ttbttvtvbtbbbbv","bvvvtbbvvvbtvbvtvtvvvvbb","vtbvvbvvvvvttvbbttbbvtvt","tbvbbt","b","v","tvbbtvvtvvtbtbttvvvb","tbttbttbbbtbtvtvtvtbbbvvtbbbvbbvvvbbttvvt","bbvttvtvvtbvbbttvbbtbvvttbvbvbtbvvvbbbvbvbvbtvbtvvvtvvtbttbttbbvbbbttvvvbvvtb","vttvvbvv","tbttbvvttvbtvvtbbvvv","bvbbbbbbbb","vtbvvtbbvtt","bvttbvvbvb","tvttttbbvvvbbtttvvv"], "btbvtttttbvttbvvbbtvvbvbvvbtbtbtvbtttbvbbbtbbtbvvttbvbvtvbtbbttbvvbvbtttbvttbvvbbvvv"));
console.log(respace(["axxpxakkxktpa","aappk","kddxxp","p","atxtdtpkt","ptxkatdakp","padpatxaptpaatkadaxka","xd","xa","kptkaxxpptpkxaxtx","t","atdxkttpppakkxkxpxdxxapakaadaxkakapxptdpkxkaadtx","kp","xa","pkkataxkakkxxktxxdptatkkxta","dxttapxpxkxttkktpkx","tat","txpdakdxpaa","axxkaxkxkkkdpkpttxdkpaaakkakdkkdxatd","paxaa"], "ppkaxpxddkpaatttxtpdtaxtadxaxatxtdtpktdxpppkaxpxddkpaatttxtpdtaxtadx"));