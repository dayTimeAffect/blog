/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/15
 */
/*
* https://leetcode.cn/problems/best-line-lcci/description/
* */
/**
 * @param {number[][]} points
 * @return {number[]}
 */
var bestLine = function(points) {
    const slope = new Map(), row = new Map(), col = new Map()
    const len = points.length
    let maxRes = {val: new Set(), 0: Infinity, 1: Infinity, len: 0}
    for (let i = 0; i < len; i ++){
        for (let j = i + 1; j < len; j ++){
            const [x1, y1] = points[i]
            const [x2, y2] = points[j]
            let tem, k
            if (x1 === x2){
                tem = row
                k = x1
            }else if (y1 === y2){
                tem = col
                k = y1
            }else {
                tem = slope
                k = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0])
                let x = (k * points[i][0] - points[i][1]) / k
                k = String(x) + "-" + String(k)
            }
            if (!tem.has(k)) tem.set(k, {val: new Set(), 0: Infinity, 1: Infinity, len: 0})
            const temObj = tem.get(k)
            if (!temObj.val.has(i)){
                temObj.val.add(i)
                temObj.len ++
                if (i < temObj[0]) {
                    temObj[1] = temObj[0]
                    temObj[0] = i
                }else if (i < temObj[1]){
                    temObj[1] = i
                }
            }
            if (!temObj.val.has(j)){
                temObj.val.add(j)
                temObj.len ++
                if (j < temObj[0]) {
                    temObj[1] = temObj[0]
                    temObj[0] = j
                }else if (j < temObj[1]){
                    temObj[1] = j
                }
            }
            if (temObj.len > maxRes.len){
                maxRes = temObj
            }else if (temObj.len === maxRes.len){
                if (temObj[0] < maxRes[0]){
                    maxRes = temObj
                }else if (temObj[0] === maxRes[0] && temObj[1] < maxRes[1]){
                    maxRes = temObj
                }
            }
        }
    }
    return [maxRes[0], maxRes[1]]
};

console.log(bestLine([[0,0],[1,1],[1,0],[2,0]]));
console.log(bestLine([[-38935,27124],[-39837,19604],[-7086,42194],[-11571,-23257],[115,-23257],[20229,5976],[24653,-18488],[11017,21043],[-9353,16550],[-47076,15237],[-36686,42194],[-17704,1104],[31067,7368],[-20882,42194],[-19107,-10597],[-14898,24506],[-20801,42194],[-52268,40727],[-14042,42194],[-23254,42194],[-30837,-53882],[1402,801],[-33961,-984],[-6411,42194],[-12210,22901],[-8213,-19441],[-26939,20810],[30656,-23257],[-27195,21649],[-33780,2717],[23617,27018],[12266,3608]]));
console.log(bestLine([[-24272,-29606],[-37644,-4251],[2691,-22513],[-14592,-33765],[-21858,28550],[-22264,41303],[-6960,12785],[-39133,-41833],[25151,-26643],[-19416,28550],[-17420,22270],[-8793,16457],[-4303,-25680],[-14405,26607],[-49083,-26336],[22629,20544],[-23939,-25038],[-40441,-26962],[-29484,-30503],[-32927,-18287],[-13312,-22513],[15026,12965],[-16361,-23282],[7296,-15750],[-11690,-21723],[-34850,-25928],[-14933,-16169],[23459,-9358],[-45719,-13202],[-26868,28550],[4627,16457],[-7296,-27760],[-32230,8174],[-28233,-8627],[-26520,28550],[5515,-26001],[-16766,28550],[21888,-3740],[1251,28550],[15333,-26322],[-27677,-19790],[20311,7075],[-10751,16457],[-47762,-44638],[20991,24942],[-19056,-11105],[-26639,28550],[-19862,16457],[-27506,-4251],[-20172,-5440],[-33757,-24717],[-9411,-17379],[12493,29906],[0,-21755],[-36885,-16192],[-38195,-40088],[-40079,7667],[-29294,-34032],[-55968,23947],[-22724,-22513],[20362,-11530],[-11817,-23957],[-33742,5259],[-10350,-4251],[-11690,-22513],[-20241,-22513]]));
console.log(bestLine([[-20398,-20631],[3544,-25103],[-12602,-17934],[-21077,-20589],[-42421,-34121],[-13836,-57776],[-23894,-15740],[-35969,44416],[20924,7570],[8073,-21024],[-13406,-30413],[-48433,-11240],[6794,-16545],[-8554,37203],[4236,-7587],[-28748,-10765]]));