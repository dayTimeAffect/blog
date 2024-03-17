/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/4
 */
/*
* https://leetcode.cn/problems/living-people-lcci/description/
* */
/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
    let len = birth.length
    let birthMap = new Array(101).fill(0)
    let deathMap = new Array(101).fill(0)

    for (let i = 0; i < len; i++){
        birthMap[birth[i] - 1900] ++
        deathMap[death[i] - 1900] ++
    }
    let birthPre = new Array(101).fill(0)
    let deathPre = new Array(101).fill(0)
    birthPre[0] = birthMap[0]
    deathPre[0] = 0
    let max = birthPre[0] - deathPre[0], year = 1900
    for (let i = 1; i <= 100; i ++){
        birthPre[i] = birthMap[i] + birthPre[i - 1]
        deathPre[i] = deathMap[i - 1] + deathPre[i - 1]
        if ((birthPre[i] - deathPre[i]) > max){
            max = birthPre[i] - deathPre[i]
            year = 1900 + i
        }
    }
    return year
};
// console.log(maxAliveYear([1900, 1901, 1950], [1948, 1951, 2000]));
console.log(maxAliveYear(
    [1927,1954,1903,1928,1956,1929,1929,1928,1958,1902,1953,1912,1923,1937,1915,1942,1964,1954,1924,1936,1963,1950,1904,1931,1951,1953,1922,1970,1986,1947,1911,1965,1913,1920,1947,1962,1903,1905,1978,1974,1950,1921,1929,1901,1925,1929,1951,1944,1945],
    [1987,1992,1967,1997,1963,1970,1944,1986,1997,1937,1971,1982,1980,1992,1995,1992,1991,1964,1985,1938,1975,1964,1975,1961,1995,1985,1946,1989,1999,1994,1956,1984,1999,1966,1950,1993,1960,1939,1990,1975,1982,1921,1964,1998,1969,1970,1965,1973,1958]
))