"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[96237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,f=m["".concat(u,".").concat(b)]||m[b]||p[b]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"VSC\u6307\u5b9a\u7c7b\u5e93\u6587\u4ef6\u589e\u5f3a\u667a\u80fd\u611f\u77e5",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],draft:!1,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2021/04/27/visual-studio-code-intelligence",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-27-visual-studio-code-intelligence.md",source:"@site/src/blog/2021-04-27-visual-studio-code-intelligence.md",title:"VSC\u6307\u5b9a\u7c7b\u5e93\u6587\u4ef6\u589e\u5f3a\u667a\u80fd\u611f\u77e5",description:"\u6709\u7684\u65f6\u5019\u5199\u4e2ademo, \u76f4\u63a5\u9875\u9762\u5f15\u7528\u7684\u7c7b\u5e93, \u5bfc\u81f4\u6709\u4e9b\u667a\u80fd\u611f\u77e5\u7f3a\u5931, \u53ef\u4ee5\u5728JS\u7684\u5f00\u5934\u589e\u52a0\u4ee5\u4e0b\u4ee3\u7801\u589e\u52a0\u667a\u80fd\u611f\u77e5:",date:"2021-04-27T00:00:00.000Z",formattedDate:"April 27, 2021",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"visual studio code",permalink:"/blog/tags/visual-studio-code"},{label:"editor",permalink:"/blog/tags/editor"}],readingTime:.35,hasTruncateMarker:!1,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"VSC\u6307\u5b9a\u7c7b\u5e93\u6587\u4ef6\u589e\u5f3a\u667a\u80fd\u611f\u77e5",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u4f7f\u7528 Docusaurus \u7ed3\u5408 GitHub \u642d\u5efa\u4e2a\u4eba\u7ad9\u70b9",permalink:"/blog/2021/05/01/docusaurus-github-starter"},nextItem:{title:"Termux\u8fdc\u7a0b\u8bbf\u95ee",permalink:"/blog/2021/04/26/termux-remote-access"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6709\u7684\u65f6\u5019\u5199\u4e2ademo, \u76f4\u63a5\u9875\u9762\u5f15\u7528\u7684\u7c7b\u5e93, \u5bfc\u81f4\u6709\u4e9b\u667a\u80fd\u611f\u77e5\u7f3a\u5931, \u53ef\u4ee5\u5728JS\u7684\u5f00\u5934\u589e\u52a0\u4ee5\u4e0b\u4ee3\u7801\u589e\u52a0\u667a\u80fd\u611f\u77e5:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'/// <reference path="../../scripts/vue/types/index.d.ts" />\n\n// \u63a5\u4e0b\u6765\u5728\u4f7f\u7528Vue\u76f8\u5173\u65b9\u6cd5\u5c31\u4f1a\u6709\u667a\u80fd\u611f\u77e5\u4e86.\n')))}p.isMDXComponent=!0}}]);