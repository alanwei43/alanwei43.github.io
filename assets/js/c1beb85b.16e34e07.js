"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[27352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,f=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684Spring MVC\u5904\u7406\u7a0b\u5e8f\u62e6\u622a\u5668\u7ba1\u7406\u4f1a\u8bdd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","spring","\u8f6c\u6458"],draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2021/05/05/spring-mvc-custom-handler-interceptor",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-05-05-spring-mvc-custom-handler-interceptor.md",source:"@site/src/blog/2021-05-05-spring-mvc-custom-handler-interceptor.md",title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684Spring MVC\u5904\u7406\u7a0b\u5e8f\u62e6\u622a\u5668\u7ba1\u7406\u4f1a\u8bdd",description:"\u539f\u6587 - Using a Custom Spring MVC\u2019s Handler Interceptor to Manage Sessions",date:"2021-05-05T00:00:00.000Z",formattedDate:"May 5, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"spring",permalink:"/blog/tags/spring"},{label:"\u8f6c\u6458",permalink:"/blog/tags/\u8f6c\u6458"}],readingTime:4.9,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684Spring MVC\u5904\u7406\u7a0b\u5e8f\u62e6\u622a\u5668\u7ba1\u7406\u4f1a\u8bdd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","spring","\u8f6c\u6458"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"macOS \u5141\u8bb8\u6253\u5f00\u4efb\u4f55\u4f4d\u7f6e\u4e0b\u8f7d\u7684App",permalink:"/blog/2021/05/05/macos-allow-apps-from-anywhere"},nextItem:{title:"Spring MVC HandlerInterceptor \u7b80\u4ecb",permalink:"/blog/2021/05/05/spring-mvc-handlerinterceptor"}},p={authorsImageUrls:[void 0]},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-mvc-custom-handler-interceptor"},"\u539f\u6587 - Using a Custom Spring MVC\u2019s Handler Interceptor to Manage Sessions")),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u4e13\u6ce8Spring MVC\u7684 ",(0,a.kt)("em",{parentName:"p"},"HandlerInterceptor"),"."),(0,a.kt)("p",null,"\u6211\u4eec\u5c55\u793a\u4e00\u4e2a\u4f7f\u7528\u62e6\u622a\u5668\u7684\u9ad8\u7ea7\u793a\u4f8b - \u6a21\u62df\u4e00\u4e2a\u4f1a\u8bdd\u8d85\u65f6\u7684\u903b\u8f91, \u901a\u8fc7\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u6b21\u6570\u624b\u52a8\u8ddf\u8e2a\u4f1a\u8bdd."),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8d8a\u591a\u66f4\u591a\u5173\u4e8eSpring ",(0,a.kt)("em",{parentName:"p"},"HandlerInterceptor")," \u7684\u57fa\u7840\u77e5\u8bc6",(0,a.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-mvc-handlerinterceptor"},"\u70b9\u51fb\u8fd9\u91cc"),"."))}u.isMDXComponent=!0}}]);