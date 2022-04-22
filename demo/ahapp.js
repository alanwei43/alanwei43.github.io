window.onload = function () {
    log(" / onload");
    var AppJsBridge = window.AHJavascriptBridge;
    var invoke = IcsYhzFe.invokeNativePromise;
    invoke("actionbarinfo", {
        title: "新车特卖",
        addmenulist: [],
        stablemenulist: []
    }).then(function () {
        log(" / actionbarinfo");
        invoke("navlucency", {
            canChangeNavAlpha: 1, // 1开启,0关闭
            callBackJSName: 'callback', // 绑定方法名,用于接收客户端回调
        }).then(function () {
            log(" / navlucency");
            AppJsBridge.bindMethod('callback', function (args, callback) {
                let n = args['navlucencystatus']; // 1 完全透明, 2 不透明
                log(" / n: " + n)
                // if (props.isDefault) {
                //     n = n === 1 || n === 0 ? 2 : n;
                // }
                const statusBarStyle = n === 2 ? 1 : 0;
                const titleColor = n === 2 ? '#000000' : '#00000000';
                const closeImageStyle = n === 2 ? 1 : 0; // ios
                invoke("navigationcolorstyle", {
                    bgcolor: '#ffffff', // 用来设置标题颜色，色值为为6位或8位rgb颜色值，前面带#或不加均可。
                    titlecolor: titleColor, // 用来设置标题颜色，色值为为6位或8位rgb颜色值，前面带#或不加均可。
                    statusBarStyle: statusBarStyle, // 顶部statusBar（时间之类）样式 0：白色 1：黑色
                    closeImageStyle: closeImageStyle, // 默认是-1 表示不修改原来的图标，1是灰色分享按钮，0是白色分享按钮 （关闭和返回按钮共用一个 style）
                    shareImageStyle: closeImageStyle, // 样式 0：白色 1：黑色
                    addmenulistBtnStyle: closeImageStyle,
                }).then(function () {
                    log(" / navigationcolorstyle");
                });
            });
        })
    });
}
function log(text) {
    document.querySelector("#log").textContent += text;
}