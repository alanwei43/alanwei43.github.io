"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[21913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u5f02\u6b65\u7f16\u7a0b\u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["async","javascript","csharp"],draft:!1,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2019/03/06/async",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2019-03-06-async.md",source:"@site/src/blog/2019-03-06-async.md",title:"\u5f02\u6b65\u7f16\u7a0b\u7b80\u4ecb",description:"JavaScript",date:"2019-03-06T00:00:00.000Z",formattedDate:"March 6, 2019",tags:[{label:"async",permalink:"/blog/tags/async"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"csharp",permalink:"/blog/tags/csharp"}],readingTime:5.69,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u5f02\u6b65\u7f16\u7a0b\u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["async","javascript","csharp"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u6211\u7684Vim\u914d\u7f6e",permalink:"/blog/2019/03/20/vim-config"},nextItem:{title:"\u54f2\u5b66\u601d\u7ef4\u8bb2\u5802 - \u5361\u5c14\xb7\u96c5\u65af\u8d1d\u5c14\u65af",permalink:"/blog/2014/09/09/philosophy-note"}},c={authorsImageUrls:[void 0]},s=[{value:"JavaScript",id:"javascript",level:2},{value:"Promise",id:"promise",level:3},{value:"\u7b80\u8ff0Promise\u53d1\u5c55\u5386\u7a0b",id:"\u7b80\u8ff0promise\u53d1\u5c55\u5386\u7a0b",level:4}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"javascript"},"JavaScript"),(0,n.kt)("h3",{id:"promise"},"Promise"),(0,n.kt)("h4",{id:"\u7b80\u8ff0promise\u53d1\u5c55\u5386\u7a0b"},"\u7b80\u8ff0Promise\u53d1\u5c55\u5386\u7a0b"),(0,n.kt)("p",null,"Promise \u4e00\u8bcd\u6700\u65e9\u7531\u4e00\u4e2aC++\u5de5\u7a0b\u5e08\u7528\u5728Xanadu\u9879\u76ee\u4e2d, \u968f\u540ePromise\u88ab\u7528\u5728E\u8bed\u8a00\u5f53\u4e2d, \u8fd9\u53c8\u6fc0\u53d1\u4e86Python\u5f00\u53d1\u4eba\u5458\u7684\u7075\u611f, \u5c06\u5b83\u5b9e\u73b0\u6210\u4e86Twisted\u6846\u67b6\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"Deferred"),"\u5bf9\u8c61. 2007\u5e74, JavaScript\u6846\u67b6Dojo\u501f\u9274Twisted\u65b0\u589e\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"dojo.Deferred"),"\u5bf9\u8c61. 2009\u5e74, Kris Zyp\u63d0\u51fa\u4e86CommonJS\u4e2d\u7684Promises/A\u89c4\u8303. #1"))}u.isMDXComponent=!0}}]);