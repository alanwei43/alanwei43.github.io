"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[90233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),b=a,f=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u7ad9\u70b9",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["mirror","linux","docker","android","aosp"],description:"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u52a0\u901f\u7ad9\u70b9",draft:!1,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2021/03/26/open-mirrors",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021/03/26-open-mirrors.md",source:"@site/src/blog/2021/03/26-open-mirrors.md",title:"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u7ad9\u70b9",description:"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u52a0\u901f\u7ad9\u70b9",date:"2021-03-26T00:00:00.000Z",formattedDate:"March 26, 2021",tags:[{label:"mirror",permalink:"/blog/tags/mirror"},{label:"linux",permalink:"/blog/tags/linux"},{label:"docker",permalink:"/blog/tags/docker"},{label:"android",permalink:"/blog/tags/android"},{label:"aosp",permalink:"/blog/tags/aosp"}],readingTime:.215,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u7ad9\u70b9",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["mirror","linux","docker","android","aosp"],description:"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u52a0\u901f\u7ad9\u70b9",draft:!1,hide_table_of_contents:!1},prevItem:{title:"Docker\u914d\u7f6e\u955c\u50cf\u52a0\u901f",permalink:"/blog/2021/03/26/docker-config-mirror"},nextItem:{title:"Chromium \u6240\u6709\u5f00\u5173(flag)\u5217\u8868",permalink:"/blog/2021/03/21/chromium-command-line-switches"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\u52a0\u901f\u7ad9\u70b9"))}p.isMDXComponent=!0}}]);