"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[45336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"macOS\u7cfb\u7edf\u5b89\u5168\u9690\u79c1\u8bbe\u7f6e\u5141\u8bb8\u4efb\u610f\u6e90\u4e0b\u8f7d\u7684App",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["macOS","mac"],draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/03/12/macos-security-allow-apps-anywhere",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-03-12-macos-security-allow-apps-anywhere.md",source:"@site/src/blog/2022-03-12-macos-security-allow-apps-anywhere.md",title:"macOS\u7cfb\u7edf\u5b89\u5168\u9690\u79c1\u8bbe\u7f6e\u5141\u8bb8\u4efb\u610f\u6e90\u4e0b\u8f7d\u7684App",description:"\u5728\u65b0\u7248\u7684macOS\u7cfb\u7edf\u91cc, \u5bf9\u901a\u8fc7\u6d4f\u89c8\u5668\u4e0b\u8f7d\u7684\u5e94\u7528\u8fdb\u884c\u4e86\u9650\u5236, \u5728 System Preferences(\u7cfb\u7edf\u8bbe\u7f6e) > Security & Privacy(\u5b89\u5168&\u9690\u79c1) > General(\u901a\u7528) > Allow apps downloaded from",date:"2022-03-12T00:00:00.000Z",formattedDate:"March 12, 2022",tags:[{label:"macOS",permalink:"/blog/tags/mac-os"},{label:"mac",permalink:"/blog/tags/mac"}],readingTime:.665,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"macOS\u7cfb\u7edf\u5b89\u5168\u9690\u79c1\u8bbe\u7f6e\u5141\u8bb8\u4efb\u610f\u6e90\u4e0b\u8f7d\u7684App",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["macOS","mac"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"docker history\u547d\u4ee4\u663e\u793a\u5b8c\u6574\u4fe1\u606f",permalink:"/blog/2022/03/12/docker-history-full-command"},nextItem:{title:"Spring \u63a5\u53e3\u540c\u65f6\u652f\u6301JSON\u6570\u636e\u548cForm\u8868\u5355\u6570\u636e",permalink:"/blog/2022/03/10/spring-both-support-json-url-encoded"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u65b0\u7248\u7684macOS\u7cfb\u7edf\u91cc, \u5bf9\u901a\u8fc7\u6d4f\u89c8\u5668\u4e0b\u8f7d\u7684\u5e94\u7528\u8fdb\u884c\u4e86\u9650\u5236, \u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"System Preferences"),"(\u7cfb\u7edf\u8bbe\u7f6e) > ",(0,n.kt)("inlineCode",{parentName:"p"},"Security & Privacy"),"(\u5b89\u5168&\u9690\u79c1) > ",(0,n.kt)("inlineCode",{parentName:"p"},"General"),"(\u901a\u7528) > ",(0,n.kt)("inlineCode",{parentName:"p"},"Allow apps downloaded from:")," \u91cc\u7f3a\u5c11\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"Anywhere"),"\u9009\u9879, \u5982\u679c\u60f3\u6253\u5f00\u6d4f\u89c8\u5668\u4e0b\u8f7d\u7684\u6587\u4ef6\u6216\u8005App, \u6bcf\u6b21\u90fd\u9700\u8981\u8fdb\u5230\u8fd9\u91cc\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Open anyway")," \u624d\u884c, \u7f51\u4e0a\u641c\u4e86\u4e00\u4e0b\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"Anywhere"),"\u9009\u9879:"))}s.isMDXComponent=!0}}]);