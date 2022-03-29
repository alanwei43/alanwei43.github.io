(function(){
    var match = /^\/docs\/articles\/([^\/]+)\/(\d+-)(.+)$/ig.exec(location.pathname);
    console.log(match);
    if(match && match.length === 4){
        location.replace(["/docs/articles", match[1], match[3]].join("/"));
    }
})();