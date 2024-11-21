/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/1
 */
/*
 * https://leetcode.cn/problems/baby-names-lcci/description/
* */

/**
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function(names, synonyms) {
    let map = {}, resMap = {}, res = []
    for (let synonym of synonyms){
        const [name1, name2] = synonym.slice(1, -1).split(',')
        if (!map[name1] && !map[name2]) {
            map[name1] = map[name2] = {min: name1 < name2 ? name1 : name2, strArr: [name1, name2]}
        }else if (map[name1] && !map[name2]){
            map[name2] = map[name1]
            map[name2].min = name2 < map[name2].min ? name2 : map[name2].min
            map[name2].strArr.push(name2)
        }else if (!map[name1] && map[name2]) {
            map[name1] = map[name2]
            map[name1].min = name1 < map[name1].min ? name1 : map[name1].min
            map[name1].strArr.push(name1)
        }else{
            let set = new Set([...map[name1].strArr, ...map[name2].strArr])
            let min = map[name1].min < map[name2].min ? map[name1].min : map[name2].min
            let temp = {min, strArr: [...set]}
            for (let name of set){
                map[name] = temp
            }
        }
    }
    for (let name of names){
        let [nameStr, num] = name.slice(0, -1).split('(')
        if (!map[nameStr]){
            resMap[nameStr] = num
        }else{
            let min = map[nameStr].min
            if (!resMap[min]) resMap[min] = 0
            resMap[min] += Number(num)
        }
    }
    for (let key in resMap){
        res.push(`${key}(${resMap[key]})`)
    }
    return res

};
console.log(trulyMostPopular(["John(15)", "Jon(12)", "Chris(13)", "Kris(4)", "Christopher(19)"], ["(Jon,John)", "(John,Johnny)", "(Chris,Kris)", "(Chris,Christopher)"]));
console.log(trulyMostPopular(["Chycnm(4)", "Dwayf(97)", "Vbp(89)", "Ommjh(63)"], ["(Chycnm,Dwayf)", "(Ommjh,Vbp)", "(Dwayf,Vbp)"]));