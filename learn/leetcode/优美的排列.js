/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/16
 */
var countArrangement = function(n) {
    //递归回溯，数字不能重复，所以每使用一个数字就记录，回溯后记录复原。可以使用寻找因数和倍数的方法减少遍历次数
    let count = 0
    let record = new Array(n + 1).fill(0)
    const createArr = (index, length) => {
        if (length === n && ( ++ count)) return;
        for (let i = 1; i <= index / 2; i ++){
            if (!record[i] && Number.isInteger(index / i)) {
                record[i] = 1
                createArr(index + 1, length + 1)
                record[i] = 0
            }
        }
        for (let i = index; i <= n; i += index){
            if (!record[i]) {
                record[i] = 1
                createArr(index + 1, length + 1)
                record[i] = 0
            }
        }
    }
    createArr(1, 0)
    return count
};
console.log(countArrangement(4));