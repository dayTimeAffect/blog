/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/26
 */
/*
* https://leetcode.cn/problems/minimum-index-sum-of-two-lists/
* */

var findRestaurant = function(list1, list2) {
    let map = new Map(), len1 = list1.length, len2 = list2.length, res = [], minIndex = Infinity
    for (let i = 0; i < len1; i ++){
        map.set(list1[i], i)
    }
    for (let i = 0; i < len2; i ++){
        if (map.has(list2[i])){
            console.log(map.get(list2[i]), i);
            if (map.get(list2[i]) + i > minIndex) continue;
            if (map.get(list2[i]) + i === minIndex) res.push(list2[i])
            if (map.get(list2[i]) + i < minIndex) {
                minIndex = map.get(list2[i]) + i
                res = [list2[i]]
            }
        }
    }
    return res
};
// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]));