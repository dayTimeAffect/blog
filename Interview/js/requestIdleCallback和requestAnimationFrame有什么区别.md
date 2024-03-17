### requestIdleCallback和requestAnimationFrame有什么区别
+ requestAnimationFrame 用于在下一帧渲染之前执行动画或其他任务，确保任务在浏览器的重绘之前执行。高优
+ requestIdleCallback 当前帧渲染之后，还有空闲时间，就执行。低优

都可以算宏任务，毕竟都在渲染之后执行