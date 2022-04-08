(function () {
  const script = document.createElement("script");
  script.src = "/scripts/gitalk.min.js";
  script.defer = true;
  script.async = true;
  script.addEventListener("load", function () {
    if (!document.querySelector("#gitalk-container")) {
      return;
    }

    const gitalk = new Gitalk({
      clientID: '23c4db407bb2651297c5',
      clientSecret: 'fc3130cc8193193e948f4230a1ee5ebdf17ae55f',
      repo: 'alanwei43.github.io',      // The repository of store comments,
      owner: 'alanwei43',
      admin: ['alanwei43'],
      id: location.pathname,      // Ensure uniqueness and length less than 50
      labels: ["Gitalk", "blog"],
      distractionFreeMode: false  // Facebook-like distraction free mode
    });

    console.log(gitalk);
    console.log("render: ", gitalk.render('gitalk-container'));
  });
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "/styles/gitalk.css";

  document.head.appendChild(script);
  document.head.appendChild(style);
})();