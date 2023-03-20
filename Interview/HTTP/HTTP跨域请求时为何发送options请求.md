### HTTP跨域请求时为何发送options请求

+ options请求,是跨域请求之前的预检查
+ 浏览器自行发起的,无需我们干预

出于安全考虑，并不是所有域名访问后端服务都可以。其实在正式跨域之前，浏览器会根据需要发起一次预检（也就是option请求），
用来让服务端返回允许的方法（如get、post），被跨域访问的Origin（来源或者域），还有是否需要Credentials(认证信息)等

简单请求：
+ 请求方法为：GET 、POST 、 HEAD
+ 请求头：Accept、Accept-Language、Content-Language、Content-Type 、DPR 、Downlink 、Save-Data 、Viewport-Width 、Width
+ Content-Type 限定为 ：text/plain、multipart/form-data、application/x-www-form-urlencoded

只有复杂请求（非简单请求）会触发触发跨域检查


