"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[70875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Caddy \u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["caddy","docker","nginx","http"],description:"Caddy \u4f7f\u7528\u4ecb\u7ecd",draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/03/12/caddy-intro",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/03/12-caddy-intro.md",source:"@site/src/blog/2022/03/12-caddy-intro.md",title:"Caddy \u7b80\u4ecb",description:"Caddy \u4f7f\u7528\u4ecb\u7ecd",date:"2022-03-12T00:00:00.000Z",formattedDate:"March 12, 2022",tags:[{label:"caddy",permalink:"/blog/tags/caddy"},{label:"docker",permalink:"/blog/tags/docker"},{label:"nginx",permalink:"/blog/tags/nginx"},{label:"http",permalink:"/blog/tags/http"}],readingTime:20.865,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"Caddy \u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["caddy","docker","nginx","http"],description:"Caddy \u4f7f\u7528\u4ecb\u7ecd",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u4f7f\u7528curl\u547d\u4ee4\u884c\u83b7\u53d6\u5f53\u524d\u673a\u5668\u516c\u7f51IP",permalink:"/blog/2022/03/16/get-public-ip-using-curl"},nextItem:{title:"docker history\u547d\u4ee4\u663e\u793a\u5b8c\u6574\u4fe1\u606f",permalink:"/blog/2022/03/12/docker-history-full-command"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/"},"\u5b98\u65b9\u7ed9\u7684\u7b80\u4ecb"),"\u662f: Caddy\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u3001\u53ef\u6269\u5c55\u7684\u5e73\u53f0, \u7528\u4e8e\u4f3a\u670d\u4f60\u7684\u7ad9\u70b9\u3001\u670d\u52a1\u4ee5\u53ca\u5e94\u7528. Caddy\u4f7f\u7528Go\u8bed\u8a00\u7f16\u5199."),(0,n.kt)("p",null,"\u7b80\u5355\u6765\u8bf4, caddy \u548c nginx \u5f88\u50cf, \u6211\u89c9\u5f97\u76f8\u6bd4\u8f83nginx\u6709\u4ee5\u4e0b\u4f18\u70b9:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5b89\u88c5\u7b80\u5355")," caddy\u7684\u662f\u4e2a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/caddyserver/caddy/releases/"},"\u5355\u6587\u4ef6\u53ef\u6267\u884c\u7a0b\u5e8f"),", \u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56, \u4e0b\u8f7d\u4e0b\u6765\u5c31\u53ef\u4ee5\u4f7f\u7528. \u5bf9\u4e8e\u7b80\u5355\u7684web\u670d\u52a1, \u4f7f\u7528\u547d\u4ee4\u884c\u5373\u53ef\u8fd0\u884c, \u4e0d\u9700\u8981\u4efb\u4f55\u914d\u7f6e\u6587\u4ef6."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u7b7e\u53d1HTTPS\u8bc1\u4e66")," caddy\u9ed8\u8ba4\u5bf9\u6240\u6709\u7ad9\u70b9\u5f00\u542fHTTPS(\u652f\u6301Let's encrypt \u548c ZeroSSL\u8bc1\u4e66\u81ea\u52a8\u7533\u8bf7)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u539f\u751f\u652f\u6301HTTP API")," \u652f\u6301\u4f7f\u7528HTTP API\u65b9\u5f0f\u4fee\u6539\u914d\u7f6e.")),(0,n.kt)("p",null,"\u7f3a\u70b9\u5c31\u662f\u751f\u6001\u548c\u6027\u80fd\u4e0d\u5982nginx, \u4e0d\u8fc7\u4e2a\u4eba\u4f7f\u7528\u7edd\u5927\u90e8\u5206\u573a\u666f\u90fd\u80fdhold\u4f4f."))}d.isMDXComponent=!0}}]);