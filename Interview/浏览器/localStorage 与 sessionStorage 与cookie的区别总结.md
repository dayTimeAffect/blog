###  localStorage 与 sessionStorage 与cookie的区别总结

**存储大小**

+ cookie：一般不超过4K（因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识）

+ sessionStorage、localStorage：5M或者更大

**数据有效性**

+ cookie：一般由服务器生成，可以设置失效时间；若没有设置时间，关闭浏览器cookie失效，若设置了时间，cookie就会存放在硬盘里，过期才失效
  > expires(绝对时间点)，max-age(相对时间)
+ sessionStorage：仅在当前浏览器窗口关闭之前有效，关闭页面或者浏览器会被清除
+ localStorage：永久有效，窗口或者浏览器关闭也会一直保存，除非手动永久清除，因此用作持久数据

**作用域**

+ cookie：在所有同源窗口中都是共享的
  > 相同浏览器下，domain与path满足该cookie设置即可共享
+ sessionStorage：在同一个浏览器窗口是共享的（不同浏览器、同一个页面也是不共享的）
  > 窗口级别，不过这里的窗口是顶级窗口。多个iframe且同源页面的话，是可以共享的
+ localStorage：在所有同源窗口中都是共享的
  > 相同浏览器   

**通信**

+ ccokie：十种携带在同源的http请求中，即使不需要，故cookie在浏览器和服务器之间来回传递；如果使用cookie保存过多数据会造成性能问题

+ sessionStorage、localStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信；不会自动把数据发送给服务器，仅在本地保存