"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[45054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),g=n,b=f["".concat(p,".").concat(g)]||f[g]||s[g]||o;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",description:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",tags:["java","proxy","http","network"]},l=void 0,i={permalink:"/blog/2021/02/17/java-network-proxy",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021/02/17-java-network-proxy.md",source:"@site/src/blog/2021/02/17-java-network-proxy.md",title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",description:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",date:"2021-02-17T00:00:00.000Z",formattedDate:"February 17, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"proxy",permalink:"/blog/tags/proxy"},{label:"http",permalink:"/blog/tags/http"},{label:"network",permalink:"/blog/tags/network"}],readingTime:.34,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",description:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",tags:["java","proxy","http","network"]},prevItem:{title:"Spring Boot Hot Swapping",permalink:"/blog/2021/02/24/hot-swapping-in-spring-boot"},nextItem:{title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",permalink:"/blog/2020/03/20/visual-studio-code-config"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/ConfigureJavaApp"},"\u914d\u7f6e\u6765\u6e90")),(0,n.kt)("p",null,"To configure a Java application to send web traffic to Fiddler, set the proxy using jre:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"jre -DproxySet=true -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8888\n")))}s.isMDXComponent=!0}}]);