"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[70922],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,b=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56753:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"JavaScript\u521b\u5efa\u6307\u5b9a\u6570\u91cf\u7684\u91cd\u590d\u5143\u7d20",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["javascript"],description:"\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u6307\u5b9a\u6570\u91cf\u7684\u91cd\u590d\u5143\u7d20 Create an array with same element repeated multiple times",draft:!1,hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/2021/06/27/javascript-create-an-array-with-repeat-element",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-06-27-javascript-create-an-array-with-repeat-element.md",source:"@site/src/blog/2021-06-27-javascript-create-an-array-with-repeat-element.md",title:"JavaScript\u521b\u5efa\u6307\u5b9a\u6570\u91cf\u7684\u91cd\u590d\u5143\u7d20",description:"\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u6307\u5b9a\u6570\u91cf\u7684\u91cd\u590d\u5143\u7d20 Create an array with same element repeated multiple times",date:"2021-06-27T00:00:00.000Z",formattedDate:"June 27, 2021",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:.595,truncated:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"JavaScript\u521b\u5efa\u6307\u5b9a\u6570\u91cf\u7684\u91cd\u590d\u5143\u7d20",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["javascript"],description:"\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u6307\u5b9a\u6570\u91cf\u7684\u91cd\u590d\u5143\u7d20 Create an array with same element repeated multiple times",draft:!1,hide_table_of_contents:!1},prevItem:{title:"Event Emitters in TypeScript",permalink:"/blog/2021/07/04/event-emitters-typescript"},nextItem:{title:"\u4f7f\u7528Docker\u8fd0\u884cApache Kafka",permalink:"/blog/2021/05/25/kafka-docker-setup"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript\u4e2d\uff0c\u5982\u679c\u521b\u5efa\u91cd\u590d\u7684\u5143\u7d20, \u539f\u95ee\u9898: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times"},"https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times")))}f.isMDXComponent=!0}}]);