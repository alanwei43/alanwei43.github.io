"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[48286],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(r),b=n,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return r?a.createElement(f,i(i({ref:e},s),{},{components:r})):a.createElement(f,i({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},430:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"JavaScript\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["web","javascript"],description:"\u539f\u751f\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8\u7684\u52a8\u753b\u6548\u679c",draft:!1,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2022/04/04/javascript-scroll-top-smooth",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/04/04-javascript-scroll-top-smooth.md",source:"@site/src/blog/2022/04/04-javascript-scroll-top-smooth.md",title:"JavaScript\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",description:"\u539f\u751f\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8\u7684\u52a8\u753b\u6548\u679c",date:"2022-04-04T00:00:00.000Z",formattedDate:"April 4, 2022",tags:[{label:"web",permalink:"/blog/tags/web"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:.31,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png"}],frontMatter:{title:"JavaScript\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["web","javascript"],description:"\u539f\u751f\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8\u7684\u52a8\u753b\u6548\u679c",draft:!1,hide_table_of_contents:!1},prevItem:{title:"JavaScript \u53d6\u6d88\u4e8b\u4ef6\u7ed1\u5b9a",permalink:"/blog/2022/04/06/javascript-cancel-event"},nextItem:{title:"\u5982\u4f55\u7528\u5f62\u8c61\u7684\u6bd4\u55bb\u63cf\u8ff0\u5927\u6570\u636e\u7684\u6280\u672f\u751f\u6001\uff1fHadoop\u3001Hive\u3001Spark \u4e4b\u95f4\u662f\u4ec0\u4e48\u5173\u7cfb\uff1f",permalink:"/blog/2022/03/31/hadoop-hive-spark-intro"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"scrollTo({top: 0, behavior: 'smooth'})")," \u53ef\u4ee5\u4e1d\u6ed1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8, \u4e0d\u9700\u8981\u5199\u52a8\u753b\u6548\u679c:"))}u.isMDXComponent=!0}}]);