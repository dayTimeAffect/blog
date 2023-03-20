/**
 * npm install crypto-js request
 */
var CryptoJS = require("crypto-js");
var request = require('request');
var querystring = require('querystring');

// 云市场分配的密钥Id
var secretId = "xxx";
// 云市场分配的密钥Key
var secretKey = "xxx";
var source = "market";

// 签名
var datetime = (new Date()).toGMTString();
var signStr = "x-date: " + datetime + "\n" + "x-source: " + source;
var sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(signStr, secretKey))
var auth = 'hmac id="' + secretId + '", algorithm="hmac-sha1", headers="x-date x-source", signature="' + sign + '"';

// 请求方法
var method = "POST";
// 请求头
var headers = {
    "X-Source": source,
    "X-Date": datetime,
    "Authorization": auth,

}
// 查询参数
var queryParams = {
    "mobile": ""}
// body参数（POST方法下）
var bodyParams = {
}
// url参数拼接
var url = "https://service-iuz6i8js-1253285064.gz.apigw.tencentcs.com/release/sms";
if (Object.keys(queryParams).length > 0) {
    url += '?' + querystring.stringify(queryParams);
}

var options = {
    url: url,
    timeout: 5000,
    method: method,
    headers: headers
}
if (['POST', 'PUT', 'PATCH'].indexOf(method) != -1) {
    options['body'] = querystring.stringify(bodyParams);
    options['headers']['Content-Type'] = "application/x-www-form-urlencoded";
}

request(options, function (error, response, body) {
    if (error !== null) {
        console.log('error:', error);
        return;
    }
    console.log(body);
});