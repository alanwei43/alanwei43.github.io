var _hmt = _hmt || [];
(function () {
  if (location.hostname === "localhost") {
    console.log("ignore baidu hm.js");
    return;
  }
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?01f1201db9004ef39e671e84ac4e66ec";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();