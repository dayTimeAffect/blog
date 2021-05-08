/*
* https://leetcode-cn.com/problems/add-binary/
* */
var addBinary = function(a, b) {
    // 记录每次相加是否需要进位，当前位应该填入的值
    // 注意，遍历结束后需要判断是否还有进位
    let carryBit = 0
    let current = 0
    let i = a.length, j = b.length;
    if (i === 0 || j === 0) return i + j;
    let res = ''
    while (i > 0 || j > 0){
        let tem = (+a[i - 1] || 0) + (+b[j - 1] || 0) + carryBit
        carryBit = tem > 1 ? 1 : 0
        current = tem % 2 === 0 ? 0 : 1
        res = current + res
        i --
        j --
    }
    return carryBit ? carryBit + res : res
};
console.log(addBinary('111', '1110'));
