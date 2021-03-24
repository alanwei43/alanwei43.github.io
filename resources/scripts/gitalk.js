(function () {
    var gitalk = new Gitalk({
        clientID: '6baee2a1759d36c0814c',
        clientSecret: '84f24c0858acb622245adffbe2c4f8b8f547a829',
        repo: 'alanwei43.github.io',
        owner: 'alanwei43',
        admin: ['alanwei43'],
        id: location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
    if (document.querySelector("#gitalk-container")) {
        gitalk.render('gitalk-container');
    }
})();