### 用vue实现拖拽功能

大体思路是这样啦，不过这是适用于PC端，因为是使用的`mouse`，移动端大同小异，监听`touch`就好

1. 鼠标按下`onmousedown`

2. 鼠标按下 监听鼠标移动了多少，并且监听鼠标有没有松下，松下就去除监听移动


