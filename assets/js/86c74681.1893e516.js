"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[83630],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},67664:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Caddy \u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["caddy","docker","nginx","http"],description:"Caddy \u4f7f\u7528\u4ecb\u7ecd",draft:!1,hide_table_of_contents:!1},c=void 0,u={permalink:"/blog/2022/03/12/caddy-intro",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-03-12-caddy-intro.md",source:"@site/src/blog/2022-03-12-caddy-intro.md",title:"Caddy \u7b80\u4ecb",description:"Caddy \u4f7f\u7528\u4ecb\u7ecd",date:"2022-03-12T00:00:00.000Z",formattedDate:"March 12, 2022",tags:[{label:"caddy",permalink:"/blog/tags/caddy"},{label:"docker",permalink:"/blog/tags/docker"},{label:"nginx",permalink:"/blog/tags/nginx"},{label:"http",permalink:"/blog/tags/http"}],readingTime:20.26,truncated:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"Caddy \u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["caddy","docker","nginx","http"],description:"Caddy \u4f7f\u7528\u4ecb\u7ecd",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u4f7f\u7528curl\u547d\u4ee4\u884c\u83b7\u53d6\u5f53\u524d\u673a\u5668\u516c\u7f51IP",permalink:"/blog/2022/03/16/get-public-ip-using-curl"},nextItem:{title:"docker history\u547d\u4ee4\u663e\u793a\u5b8c\u6574\u4fe1\u606f",permalink:"/blog/2022/03/12/docker-history-full-command"}},p={authorsImageUrls:[void 0]},d=[],s={toc:d};function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/"},"\u5b98\u65b9\u7ed9\u7684\u7b80\u4ecb"),"\u662f: Caddy\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u3001\u53ef\u6269\u5c55\u7684\u5e73\u53f0, \u7528\u4e8e\u4f3a\u670d\u4f60\u7684\u7ad9\u70b9\u3001\u670d\u52a1\u4ee5\u53ca\u5e94\u7528. Caddy\u4f7f\u7528Go\u8bed\u8a00\u7f16\u5199."),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4, caddy \u548c nginx \u5f88\u50cf, \u6211\u89c9\u5f97\u76f8\u6bd4\u8f83nginx\u6709\u4ee5\u4e0b\u4f18\u70b9:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5\u7b80\u5355")," caddy\u7684\u662f\u4e2a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/caddyserver/caddy/releases/"},"\u5355\u6587\u4ef6\u53ef\u6267\u884c\u7a0b\u5e8f"),", \u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56, \u4e0b\u8f7d\u4e0b\u6765\u5c31\u53ef\u4ee5\u4f7f\u7528. \u5bf9\u4e8e\u7b80\u5355\u7684web\u670d\u52a1, \u4f7f\u7528\u547d\u4ee4\u884c\u5373\u53ef\u8fd0\u884c, \u4e0d\u9700\u8981\u4efb\u4f55\u914d\u7f6e\u6587\u4ef6."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u7b7e\u53d1HTTPS\u8bc1\u4e66")," caddy\u9ed8\u8ba4\u5bf9\u6240\u6709\u7ad9\u70b9\u5f00\u542fHTTPS(\u652f\u6301Let's encrypt \u548c ZeroSSL\u8bc1\u4e66\u81ea\u52a8\u7533\u8bf7)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u539f\u751f\u652f\u6301HTTP API")," \u652f\u6301\u4f7f\u7528HTTP API\u65b9\u5f0f\u4fee\u6539\u914d\u7f6e.")),(0,o.kt)("p",null,"\u7f3a\u70b9\u5c31\u662f\u751f\u6001\u548c\u6027\u80fd\u4e0d\u5982nginx, \u4e0d\u8fc7\u4e2a\u4eba\u4f7f\u7528\u7edd\u5927\u90e8\u5206\u573a\u666f\u90fd\u80fdhold\u4f4f."))}f.isMDXComponent=!0}}]);