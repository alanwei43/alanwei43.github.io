
(function (c, l, a, r, i, t, y) {
  if (location.hostname === "localhost" || location.hostname === "blog.online.alanwei.com") {
    console.log("ignore @bing.js");
    return;
  }
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
  t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt";
  y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "b8oald8p2g");