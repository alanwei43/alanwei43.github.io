(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(446)),i={title:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u521b\u5efa\u5e26\u6709\u591a\u4e2a\u5b50\u6a21\u5757\u7684Maven\u9879\u76ee",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["maven"],draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/04/03/how-to-create-maven-multi-module-project",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-03-how-to-create-maven-multi-module-project.md",source:"@site/src/blog/2021-04-03-how-to-create-maven-multi-module-project.md",description:"In this guide, we learn how to create Maven Multi-Module using Command Line with very easy steps. A multi-module project is defined by a parent POM referencing one or more sub-modules. In this example, we will create a blogger web application with different modules. Let's create a blogger as parent project and it's 3 sub-modules are blogger-core, blogger-common, blogger-web.",date:"2021-04-03T00:00:00.000Z",tags:[{label:"maven",permalink:"/blog/tags/maven"}],title:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u521b\u5efa\u5e26\u6709\u591a\u4e2a\u5b50\u6a21\u5757\u7684Maven\u9879\u76ee",readingTime:4.15,truncated:!0,prevItem:{title:"ASP.Net \u5e94\u7528\u914d\u7f6eHTTP\u4ee3\u7406",permalink:"/blog/2021/04/03/asp.net-proxy-configuration"},nextItem:{title:"\u89e3\u51b3 Windows \u73af\u5883\u4e2d git log \u547d\u4ee4\u4e2d\u6587\u7f16\u7801\u95ee\u9898",permalink:"/blog/2021/04/03/powershell-git-chinese-encode"}},c=[],u={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this guide, we learn how to create Maven Multi-Module using Command Line with very easy steps. A multi-module project is defined by a parent POM referencing one or more sub-modules. In this example, we will create a blogger web application with different modules. Let's create a blogger as parent project and it's 3 sub-modules are blogger-core, blogger-common, blogger-web."),Object(a.b)("p",null,"Real-world examples of maven multi-module projects are:"))}p.isMDXComponent=!0},446:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,f=s["".concat(i,".").concat(b)]||s[b]||m[b]||a;return r?o.a.createElement(f,l(l({ref:t},u),{},{components:r})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);