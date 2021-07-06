/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/5
 */
/*function consoleX() {
    console.log(x1);
    console.log(x2);
    var x1 = 'x1';
    let x2 = 'x2';
}

consoleX();*/
for (let i = [], j = 0; j < 2; j ++){
    i.push(j)
    setTimeout(() => {console.log([...i]);}, 0)
}
for (let i = [], j = 0; j < 2; j ++){
    setTimeout(() => {console.log([...i]);}, 0)
    setTimeout(() => {console.log(j);}, 0)
}
