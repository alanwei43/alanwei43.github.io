"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[71571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),b=a,m=f["".concat(l,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"TypeScript \u7c7b\u578b\u5b9a\u4e49\u5c0f\u6280\u5de7",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["typescript"],description:"TypeScript \u51fd\u6570\u91cd\u8f7d\u5b9a\u4e49, \u51fd\u6570\u5c5e\u6027\u5b9a\u4e49",draft:!1,hide_table_of_contents:!1},i=void 0,c={permalink:"/blog/2021/11/28/typescript-type-define-skills",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-11-28-typescript-type-define-skills.md",source:"@site/src/blog/2021-11-28-typescript-type-define-skills.md",title:"TypeScript \u7c7b\u578b\u5b9a\u4e49\u5c0f\u6280\u5de7",description:"TypeScript \u51fd\u6570\u91cd\u8f7d\u5b9a\u4e49, \u51fd\u6570\u5c5e\u6027\u5b9a\u4e49",date:"2021-11-28T00:00:00.000Z",formattedDate:"November 28, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:1.325,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"TypeScript \u7c7b\u578b\u5b9a\u4e49\u5c0f\u6280\u5de7",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["typescript"],description:"TypeScript \u51fd\u6570\u91cd\u8f7d\u5b9a\u4e49, \u51fd\u6570\u5c5e\u6027\u5b9a\u4e49",draft:!1,hide_table_of_contents:!1},prevItem:{title:"API Extractor \u4f7f\u7528",permalink:"/blog/2021/12/12/tsdoc-config"},nextItem:{title:"\u300a\u56fe\u89e3HTTP\u300b\u7b14\u8bb0",permalink:"/blog/2021/11/18/book-tu-jie-http"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript\u5b9a\u4e49\u5c0f\u6280\u5de7"))}u.isMDXComponent=!0}}]);