(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(545)),i={title:"Dockerfile \u5e38\u7528\u6307\u4ee4\u4ecb\u7ecd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["docker","dockerfile"],description:"Dockerfile\u5e38\u7528\u6307\u4ee4\u4ecb\u7ecd",draft:!1,hide_table_of_contents:!1},o={permalink:"/blog/2022/02/26/docker-dockerfile-intro",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-02-26-docker-dockerfile-intro.md",source:"@site/src/blog/2022-02-26-docker-dockerfile-intro.md",description:"Dockerfile\u5e38\u7528\u6307\u4ee4\u4ecb\u7ecd",date:"2022-02-26T00:00:00.000Z",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dockerfile",permalink:"/blog/tags/dockerfile"}],title:"Dockerfile \u5e38\u7528\u6307\u4ee4\u4ecb\u7ecd",readingTime:1.15,truncated:!1,prevItem:{title:"VMware\u7684Windows\u865a\u62df\u673a\u4e2d\u56e0\u9a71\u52a8\u7b7e\u540d\u95ee\u9898\u65e0\u6cd5\u5b89\u88c5 VMware Tools",permalink:"/blog/2022/02/27/windows-vmware-tools-drive-fail"},nextItem:{title:"\u89e3\u51b3IDEA\u4f7f\u7528\u4f4e\u7248\u672clombok\u6ca1\u6709get/set\u65b9\u6cd5\u95ee\u9898",permalink:"/blog/2022/02/24/idea-lombok"}},c=[{value:"ARG",id:"arg",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Dockerfile\u9884\u7f6e ARG",id:"dockerfile\u9884\u7f6e-arg",children:[]}]},{value:"ENV",id:"env",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5e38\u7528",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile"),"\u6587\u4ef6\u6307\u4ee4\u4ecb\u7ecd"),Object(l.b)("h2",{id:"arg"},"ARG"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/builder/#arg"},"Dockerfile Reference - ARG")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/docker-arg-instruction/"},"Docker \u2013 ARG Instruction")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.thegeekdiary.com/run-docker-as-a-non-root-user/"},"Run Docker as a non-root user"))),Object(l.b)("p",null,"Dockerfile\u4e2d\u7684",Object(l.b)("inlineCode",{parentName:"p"},"ARG"),"\u6307\u4ee4\u7528\u4e8e\u5b9a\u4e49\u7528\u6237\u53d8\u91cf, \u8fd9\u4e9b\u53d8\u91cf\u5728\u7528\u6237\u6784\u5efa\u955c\u50cf(",Object(l.b)("inlineCode",{parentName:"p"},"docker build"),")\u7684\u65f6\u5019\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"--build-arg <var_name>=<value>"),"\u53ef\u4ee5\u4fee\u6539, \u901a\u8fc7\u955c\u50cf\u521b\u5efa\u5bb9\u5668\u7684\u7cfb\u7edf\u4e2d, \u662f\u65e0\u6cd5\u8bbf\u95ee\u5230\u8fd9\u4e9b\u53d8\u91cf\u7684. \u4e5f\u5c31\u662f\u8bf4",Object(l.b)("inlineCode",{parentName:"p"},"ARG"),"\u5b9a\u4e49\u7684\u53d8\u91cf, \u4ec5\u5728\u6784\u5efa\u9636\u6bb5\u8d77\u4f5c\u7528. \u5982\u679c\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"docker build --build-arg")," \u4f7f\u7528\u4e86\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile"),"\u4e2d\u672a\u5b9a\u4e49\u7684\u53c2\u6570, \u5728\u6784\u5efa\u7684\u65f6\u5019\u4f1a\u8f93\u51fa\u8b66\u544a."),Object(l.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b, \u5728\u6784\u5efa\u955c\u50cf\u7684\u65f6\u5019\u53ef\u4ee5\u4fee\u6539\u955c\u50cf\u91cc\u7684\u7528\u6237\u540d: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM alanway/code-server:latest\n\nEXPOSE 80\n\n# \u8bbe\u7f6e\u4e24\u4e2a\u53d8\u91cf\nARG USER=editor\nARG USER_ID=1000\n\n# 1. \u521b\u5efa\u7528\u6237\n# 2. \u521b\u5efa /app \u76ee\u5f55\n# 3. \u4fee\u6539 /app \u76ee\u5f55\u6240\u6709\u8005, \u5982\u679c\u4e0d\u4fee\u6539, \u521b\u5efa\u7684\u7528\u6237\u5bf9 /app \u76ee\u5f55\u6ca1\u6709\u8bfb\u5199\u6743\u9650\nRUN useradd --create-home --uid $USER_ID --user-group --shell /bin/bash $USER \\\n    && mkdir /app \\\n    && chown $USER:$USER /app\n\n# \u8bbe\u7f6e\u955c\u50cf\u7684\u5f53\u524d\u7528\u6237\nUSER $USER\n\nWORKDIR /app\n# \u62f7\u8d1d\u6587\u4ef6\u7684\u9ed8\u8ba4\u6240\u6709\u8005\u4e3aroot, \u52a0\u4e0a --chown=$USER \u4fee\u6539\u6587\u4ef6\u6240\u6709\u8005\u4e3a\u4e0a\u9762\u65b0\u521b\u5efa\u7684\u7528\u6237\nCOPY --chown=$USER ./src ./\n")),Object(l.b)("p",null,"\u5f00\u59cb\u6784\u5efa"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="build.sh"',title:'"build.sh"'},"docker build --file Dockerfile --tag blog-editor --build-arg USER=alan ./\n")),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"\u4e0d\u63a8\u8350\u5728\u955c\u50cf\u6784\u5efa\u9636\u6bb5\u4f20\u9012\u5b89\u5168\u5bc6\u94a5\u4fe1\u606f(\u6bd4\u5982github keys, user credentials\u7b49). \u6784\u5efa\u9636\u6bb5\u7684\u53d8\u91cf\u5bf9\u7528\u6237\u662f\u53ef\u89c1\u7684, \u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"docker history"),"\u547d\u4ee4\u5373\u53ef\u770b\u5230\u6784\u5efa\u65f6\u7684\u53d8\u91cf."))),Object(l.b)("h3",{id:"dockerfile\u9884\u7f6e-arg"},"Dockerfile\u9884\u7f6e ARG"),Object(l.b)("p",null,"Docker\u63d0\u4f9b\u4e86\u4e00\u6279\u9884\u5148\u5b9a\u4e49\u7684",Object(l.b)("inlineCode",{parentName:"p"},"ARG"),", \u65e0\u9700\u5728Dockerfile\u4e2d\u5b9a\u4e49\u5373\u53ef\u4f7f\u7528:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HTTP_PROXY"),Object(l.b)("li",{parentName:"ul"},"http_proxy"),Object(l.b)("li",{parentName:"ul"},"HTTPS_PROXY"),Object(l.b)("li",{parentName:"ul"},"https_proxy"),Object(l.b)("li",{parentName:"ul"},"FTP_PROXY"),Object(l.b)("li",{parentName:"ul"},"ftp_proxy"),Object(l.b)("li",{parentName:"ul"},"NO_PROXY"),Object(l.b)("li",{parentName:"ul"},"no_proxy")),Object(l.b)("p",null,"\u76f4\u63a5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"--build-arg")," \u6807\u8bc6\u5373\u53ef\u4f7f\u7528: ",Object(l.b)("inlineCode",{parentName:"p"},"docker build --build-arg HTTPS_PROXY=https://my-proxy.example.com .")),Object(l.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u4e0a\u9762\u9884\u7f6e\u7684\u6307\u4ee4\u5728",Object(l.b)("inlineCode",{parentName:"p"},"docker history"),"\u547d\u4ee4\u4e2d\u662f\u4e0d\u4f1a\u8f93\u51fa\u7684, \u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u51cf\u5c11\u7c7b\u4f3c\u4e0b\u9762\u4f7f\u7528\u65b9\u5f0f\u5e26\u6765\u7684\u5b89\u5168\u98ce\u9669:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"docker build --build-arg HTTP_PROXY=http://user:pass@proxy.lon.example.com ./\n")),Object(l.b)("p",null,"\u4e0a\u9762\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," \u53c2\u6570\u503c\u6709\u654f\u611f\u4fe1\u606f, \u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"docker history")," \u662f\u65e0\u6cd5\u770b\u5230\u8fd9\u4e2a\u654f\u611f\u4fe1\u606f\u7684. \u5982\u679c\u4e0a\u8ff0",Object(l.b)("inlineCode",{parentName:"p"},"ARG"),"\u5728",Object(l.b)("inlineCode",{parentName:"p"},"docker history"),"\u4e2d\u51fa\u73b0, \u53ef\u4ee5\u5728Dockerfile\u4e2d\u58f0\u660e\u4e00\u6b21:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM ubuntu\n\nARG HTTP_PROXY\n")),Object(l.b)("h2",{id:"env"},"ENV"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ENV"),"\u6307\u4ee4\u53ef\u4ee5\u7528\u6765\u5b9a\u4e49\u7cfb\u7edf\u73af\u5883\u53d8\u91cf, \u8fd9\u4e9b\u53d8\u91cf\u53ef\u4ee5\u5728\u521b\u5efa\u5bb9\u5668(",Object(l.b)("inlineCode",{parentName:"p"},"docker run"),")\u7684\u65f6\u5019\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u4fee\u6539\u73af\u5883\u53d8\u91cf. \u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u5728\u5bb9\u5668\u542f\u52a8\u540e\u4ecd\u7136\u53ef\u4ee5\u8bbf\u95ee."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u683c\u5f0f\u5982\u4e0b")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dockerfile"},"ENV <key>=<value> ...\n")),Object(l.b)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM ubuntu\n\nENV TZ=Asia/Shanghai\nENV MY_NAME="John Doe"\nENV MY_DOG=Rex\\ The\\ Dog\nENV MY_CAT=fluffy\n')),Object(l.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"docker inspect")," \u67e5\u770b\u73af\u5883\u53d8\u91cf\u7684\u503c, \u5728",Object(l.b)("inlineCode",{parentName:"p"},"docker run"),"\u521b\u5efa\u5bb9\u5668\u7684\u65f6\u5019\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"--env")," \u4fee\u6539\u73af\u5883\u53d8\u91cf\u7684\u503c:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'docker run -it --rm --env TZ=test_value -e MY_NAME="Alan Wei" ubuntu bash\n')))}p.isMDXComponent=!0},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);