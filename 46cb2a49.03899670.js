(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(546)),i=(r(549),{title:"How to Setup Reverse Proxy on IIS with URL-Rewrite",author:"\u8f6c\u6458",author_url:"https://tecadmin.net/set-up-reverse-proxy-using-iis/",tags:["iis","reverse proxy","url rewrite"],description:"\u4f7f\u7528IIS\u7684URL Rewrite\u8bbe\u7f6e\u53cd\u5411\u4ee3\u7406",draft:!1,hide_table_of_contents:!1}),l={permalink:"/blog/2021/04/11/iis-reverse-proxy-url-rewrite",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-iis-reverse-proxy-url-rewrite.md",source:"@site/src/blog/2021-04-11-iis-reverse-proxy-url-rewrite.md",description:"\u4f7f\u7528IIS\u7684URL Rewrite\u8bbe\u7f6e\u53cd\u5411\u4ee3\u7406",date:"2021-04-11T00:00:00.000Z",tags:[{label:"iis",permalink:"/blog/tags/iis"},{label:"reverse proxy",permalink:"/blog/tags/reverse-proxy"},{label:"url rewrite",permalink:"/blog/tags/url-rewrite"}],title:"How to Setup Reverse Proxy on IIS with URL-Rewrite",readingTime:2.07,truncated:!0,prevItem:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Sentry",permalink:"/blog/2021/04/11/docker-sentry-deploy"},nextItem:{title:"\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",permalink:"/blog/2021/04/11/iis-reverse-proxy"}},c=[],s={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Most of the system administrator is aware of the reverse proxy. It is a type of proxy server which fetches the resources from one or more computers on clients requests and send back to the client. In simple terms, it works as an intermediate server, which listens to clients query. Then requests to server bases of clients query and returns results to client sent by the server. This tutorial will help you to setup reverse proxy using IIS with URL rewrite and application request routing extension."))}u.isMDXComponent=!0},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return r?o.a.createElement(b,l(l({ref:t},s),{},{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var n=r(0),o=r.n(n),a=r(548);function i(e){if("string"!=typeof e.href)return o.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=Object(a.a)(e.href);return o.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}function l(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?o.a.createElement("img",{alt:e.src,src:t}):o.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}},548:function(e,t,r){"use strict";function n(e){var t=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!t||5!==t.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var r=t[1],n=t[2],o=t[3],a=t[4];return a.endsWith(".md")&&(a=a.substr(0,a.length-3)),a.endsWith(".mdx")&&(a=a.substr(0,a.length-4)),"/blog/"+r+"/"+n+"/"+o+"/"+a}r.d(t,"a",(function(){return n}))},549:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l.a})),r.d(t,"c",(function(){return l.b}));var n=r(4),o=r(0),a=r.n(o),i=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?a.a.createElement("a",{href:e,target:"_blank"},this.props.author):a.a.createElement("i",null,this.props.author);return a.a.createElement("section",null,a.a.createElement("ul",{style:{marginLeft:"-1em"}},a.a.createElement("li",null,"\u4f5c\u8005: ",r),a.a.createElement("li",null,"\u6765\u6e90: ",a.a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),a.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",a.a.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",a.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},t}(a.a.Component),l=r(547)}}]);