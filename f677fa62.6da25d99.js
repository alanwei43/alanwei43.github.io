(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{521:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(545)),a=r(548),l={title:"\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["iis","reverse proxy"],description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/04/11/iis-reverse-proxy",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-iis-reverse-proxy.md",source:"@site/src/blog/2021-04-11-iis-reverse-proxy.md",description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",date:"2021-04-11T00:00:00.000Z",tags:[{label:"iis",permalink:"/blog/tags/iis"},{label:"reverse proxy",permalink:"/blog/tags/reverse-proxy"}],title:"\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",readingTime:.355,truncated:!0,prevItem:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Sentry",permalink:"/blog/2021/04/11/docker-sentry-deploy"},nextItem:{title:"\u67e5\u770b\u5f53\u524d\u673a\u5668\u7684\u6240\u6709SSH\u8fde\u63a5",permalink:"/blog/2021/04/11/linux-show-ssh-connection"}},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5047\u8bbe\u5c06\u57df\u540d",Object(o.b)("inlineCode",{parentName:"p"},"www.helloworld.com"),"\u4ee3\u7406\u5230\u672c\u5730\u7684",Object(o.b)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3"),Object(o.b)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5IIS"),Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)(a.c,{href:"files/iis-reverse-proxy/IIS_ARR_requestRouter_amd64.msi",mdxType:"Res"},Object(o.b)("a",{parentName:"li",href:"http://www.iis.net/downloads/microsoft/url-rewrite"},"http://www.iis.net/downloads/microsoft/url-rewrite"))),Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(o.b)(a.c,{href:"files/iis-reverse-proxy/IIS_URL_Rewriter_rewrite_amd64_en-US.msi",mdxType:"Res"},Object(o.b)("a",{parentName:"li",href:"https://www.iis.net/downloads/microsoft/application-request-routing"},"https://www.iis.net/downloads/microsoft/application-request-routing"))),Object(o.b)("li",{parentName:"ul"},"\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"C:\\Windows\\System32\\drivers\\etc\\hosts")," \u6587\u4ef6\u589e\u52a0\u57df\u540d\u89e3\u6790 ",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1 www.helloworld.com"))),Object(o.b)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),Object(o.b)("p",null,"\u8bbe\u7f6e\u524d: "),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-0.png",mdxType:"Res"}),Object(o.b)("p",null,"\u5f00\u542fARR\u4ee3\u7406:"),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-1.png",mdxType:"Res"}),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-2.png",mdxType:"Res"}),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-3.png",mdxType:"Res"}),Object(o.b)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u7ad9\u70b9",Object(o.b)("inlineCode",{parentName:"p"},"helloworld"),"(\u7ad9\u70b9\u540d\u79f0\u968f\u610f), \u5e76\u7ed1\u5b9a\u57df\u540d",Object(o.b)("inlineCode",{parentName:"p"},"www.helloworld.com"),":"),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-4.png",mdxType:"Res"}),Object(o.b)("p",null,"\u914d\u7f6e",Object(o.b)("inlineCode",{parentName:"p"},"helloworld"),"\u7ad9\u70b9\u7684URL Rewrite:"),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-5.png",mdxType:"Res"}),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-6.png",mdxType:"Res"}),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-7.png",mdxType:"Res"}),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-8.png",mdxType:"Res"}),Object(o.b)("p",null,"\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"p"},"www.helloworld.com")," \u5b9e\u9645\u4e0a\u8bbf\u95ee\u7684\u662fIIS\u7684\u7ad9\u70b9",Object(o.b)("inlineCode",{parentName:"p"},"helloworld"),", \u7136\u540eIIS\u4f1a\u5c06\u8bf7\u6c42\u8def\u7531\u5230",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1:8080"),", \u770b\u5230\u7684\u6548\u679c\u5982\u4e0b: "),Object(o.b)(a.c,{src:"files/iis-reverse-proxy/IIS-Proxy-Tutorial-9.png",mdxType:"Res"}))}u.isMDXComponent=!0},545:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||o;return r?i.a.createElement(f,l(l({ref:t},s),{},{components:r})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}));var n=r(0),i=r.n(n),o=r(547);function a(e){if("string"!=typeof e.href)return i.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=Object(o.a)(e.href);return i.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}function l(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?i.a.createElement("img",{alt:e.src,src:t}):i.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}},547:function(e,t,r){"use strict";function n(e){var t=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!t||5!==t.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var r=t[1],n=t[2],i=t[3],o=t[4];return o.endsWith(".md")&&(o=o.substr(0,o.length-3)),o.endsWith(".mdx")&&(o=o.substr(0,o.length-4)),"/blog/"+r+"/"+n+"/"+i+"/"+o}r.d(t,"a",(function(){return n}))},548:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return l.a})),r.d(t,"c",(function(){return l.b}));var n=r(4),i=r(0),o=r.n(i),a=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?o.a.createElement("a",{href:e,target:"_blank"},this.props.author):o.a.createElement("i",null,this.props.author);return o.a.createElement("section",null,o.a.createElement("ul",{style:{marginLeft:"-1em"}},o.a.createElement("li",null,"\u4f5c\u8005: ",r),o.a.createElement("li",null,"\u6765\u6e90: ",o.a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),o.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",o.a.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",o.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},t}(o.a.Component),l=r(546)}}]);