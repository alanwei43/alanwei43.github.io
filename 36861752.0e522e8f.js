(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(546)),i={title:"Node require \u7f13\u5b58",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:[],description:"\u63cf\u8ff0\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u6587\u7ae0\u7b2c\u4e00\u6bb5",draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/04/10/node-require-cache",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-10-node-require-cache.md",source:"@site/src/blog/2021-04-10-node-require-cache.md",description:"\u63cf\u8ff0\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u6587\u7ae0\u7b2c\u4e00\u6bb5",date:"2021-04-10T00:00:00.000Z",tags:[],title:"Node require \u7f13\u5b58",readingTime:.25,truncated:!0,prevItem:{title:"\u5236\u4f5cWindows\u542f\u52a8\u76d8",permalink:"/blog/2021/04/11/windows-bootable-device"},nextItem:{title:"ASP.Net \u5e94\u7528\u914d\u7f6eHTTP\u4ee3\u7406",permalink:"/blog/2021/04/03/asp.net-proxy-configuration"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728Node\u73af\u5883, \u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"require"),"\u591a\u6b21\u52a0\u8f7d\u6a21\u5757\u65f6, \u8fd4\u56de\u7684\u90fd\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61, \u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"require.cache"),"\u53ef\u4ee5\u8fed\u4ee3\u67e5\u770b\u6240\u6709require\u7f13\u5b58\u7684\u5bf9\u8c61."))}p.isMDXComponent=!0},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),b=n,d=f["".concat(i,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);