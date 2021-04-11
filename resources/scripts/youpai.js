(function () {
    window.addEventListener("load", function () {
        const eleBottom = document.querySelector(".footer .footer__bottom")
        const eleYoupai = document.createElement("div");
        eleBottom.appendChild(eleYoupai);
        eleYoupai.innerHTML = [
            "<a href=\"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral\">本网站由",
            '<img src="https://gitee.com/alanway/resources/raw/master/images/youpai-logo.png" style="padding: 0 5px; width: 70px" />',
            "提供CDN加速/云存储服务</a>"
        ].join("");
    });
})();