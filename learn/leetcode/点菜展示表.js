/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/6
 */
/*
* https://leetcode-cn.com/problems/display-table-of-food-orders-in-a-restaurant/
* */
var displayTable = function(orders) {
    let tableNumbers = {}
    let foodItems = {}
    for (let i = 0; i < orders.length; i ++){
        let [customer, table, food] = orders[i]
        if (tableNumbers[table]){
            tableNumbers[table][food] = (tableNumbers[table][food] || 0) + 1
        }else{
            tableNumbers[table] = { [food]: 1 }
        }
        foodItems[food] = true
    }
    // 食物排序
    foodItems = Object.keys(foodItems).sort()
    // 座号会自动排序
    let tableNumbersArr = Object.keys(tableNumbers)
    let res = [["Table", ...foodItems]]
    for (let i = 0; i < tableNumbersArr.length; i ++){
        res.push([tableNumbersArr[i]])
        for (let j = 0; j < foodItems.length; j ++){
            res[i + 1].push(String(tableNumbers[tableNumbersArr[i]][foodItems[j]] || 0))
        }
    }
    return res
};
console.log(displayTable([["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"],
    ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"],
    ["Rous", "3", "Ceviche"]]));