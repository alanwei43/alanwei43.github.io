"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[95646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,b=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"long \u8f6c int - Java",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["java"],description:"Java\u8bed\u8a00\u91cc\u5c06 long \u8f6c\u4e3a int \u7c7b\u578b",draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/05/06/java-long-to-int",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/05/06-java-long-to-int.md",source:"@site/src/blog/2022/05/06-java-long-to-int.md",title:"long \u8f6c int - Java",description:"Java\u8bed\u8a00\u91cc\u5c06 long \u8f6c\u4e3a int \u7c7b\u578b",date:"2022-05-06T00:00:00.000Z",formattedDate:"May 6, 2022",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:.36,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png"}],frontMatter:{title:"long \u8f6c int - Java",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["java"],description:"Java\u8bed\u8a00\u91cc\u5c06 long \u8f6c\u4e3a int \u7c7b\u578b",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u89e3\u51b3 IDEA \u6253\u5f00Java\u9879\u76ee\u63d0\u793a Cannot resolve symbol \u95ee\u9898",permalink:"/blog/2022/05/08/idea-cannot-resolve-symbol"},nextItem:{title:"\u767b\u5f55 Ubuntu 20.04 LTS \u663e\u793a There is 1 zombie process",permalink:"/blog/2022/05/04/ubuntu-there-is-1-zombie-process"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u539f\u6587 ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4355303/how-can-i-convert-a-long-to-int-in-java"},"How can I convert a long to int in Java?"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Updated, in Java 8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Math.toIntExact(value);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Original Answer:")),(0,r.kt)("p",null,"Simple type casting should do it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"long l = 100000;\nint i = (int) l;\n")),(0,r.kt)("p",null,"Note, however, that large numbers (usually larger than ",(0,r.kt)("inlineCode",{parentName:"p"},"2147483647")," and smaller than ",(0,r.kt)("inlineCode",{parentName:"p"},"-2147483648"),") will lose some of the bits and would be represented incorrectly."),(0,r.kt)("p",null,"For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"2147483648")," would be represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"-2147483648"),"."))}s.isMDXComponent=!0}}]);