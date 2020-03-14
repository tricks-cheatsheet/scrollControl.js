# scrollControl

一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案

有几点可能要注意：

1. `body { margin: 0 }`
2. 微信上问题不大，具体手机浏览器上（比如 iOS safari）有地址栏，但是往上滑地址栏会消失，preventScroll 会造成一定滚动
