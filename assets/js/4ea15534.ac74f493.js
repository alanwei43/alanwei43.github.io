"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[37500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"VMware\u7684Windows\u865a\u62df\u673a\u4e2d\u56e0\u9a71\u52a8\u7b7e\u540d\u95ee\u9898\u65e0\u6cd5\u5b89\u88c5 VMware Tools",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vmware"],draft:!1,hide_table_of_contents:!1,description:"\u89e3\u51b3mac VMware Fusion\u5b89\u88c5vmware tools\u7070\u8272\u7684\u6559\u7a0b\u3002 Vmware Workstation 16 Pro\u201c\u5b89\u88c5\u7a0b\u5e8f\u65e0\u6cd5\u81ea\u52a8\u5b89\u88c5Virtual Machine Communication Interface(VMCI)\u9a71\u52a8\u7a0b\u5e8f\u3002\u5fc5\u987b\u624b\u52a8\u5b89\u88c5\u6b64\u9a71\u52a8\u7a0b\u5e8f\u3002\u201d"},i=void 0,l={permalink:"/blog/2022/02/27/windows-vmware-tools-drive-fail",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/02/27-windows-vmware-tools-drive-fail.md",source:"@site/src/blog/2022/02/27-windows-vmware-tools-drive-fail.md",title:"VMware\u7684Windows\u865a\u62df\u673a\u4e2d\u56e0\u9a71\u52a8\u7b7e\u540d\u95ee\u9898\u65e0\u6cd5\u5b89\u88c5 VMware Tools",description:"\u89e3\u51b3mac VMware Fusion\u5b89\u88c5vmware tools\u7070\u8272\u7684\u6559\u7a0b\u3002 Vmware Workstation 16 Pro\u201c\u5b89\u88c5\u7a0b\u5e8f\u65e0\u6cd5\u81ea\u52a8\u5b89\u88c5Virtual Machine Communication Interface(VMCI)\u9a71\u52a8\u7a0b\u5e8f\u3002\u5fc5\u987b\u624b\u52a8\u5b89\u88c5\u6b64\u9a71\u52a8\u7a0b\u5e8f\u3002\u201d",date:"2022-02-27T00:00:00.000Z",formattedDate:"February 27, 2022",tags:[{label:"vmware",permalink:"/blog/tags/vmware"}],readingTime:2.94,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"VMware\u7684Windows\u865a\u62df\u673a\u4e2d\u56e0\u9a71\u52a8\u7b7e\u540d\u95ee\u9898\u65e0\u6cd5\u5b89\u88c5 VMware Tools",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vmware"],draft:!1,hide_table_of_contents:!1,description:"\u89e3\u51b3mac VMware Fusion\u5b89\u88c5vmware tools\u7070\u8272\u7684\u6559\u7a0b\u3002 Vmware Workstation 16 Pro\u201c\u5b89\u88c5\u7a0b\u5e8f\u65e0\u6cd5\u81ea\u52a8\u5b89\u88c5Virtual Machine Communication Interface(VMCI)\u9a71\u52a8\u7a0b\u5e8f\u3002\u5fc5\u987b\u624b\u52a8\u5b89\u88c5\u6b64\u9a71\u52a8\u7a0b\u5e8f\u3002\u201d"},prevItem:{title:"VMware \u547d\u4ee4\u884c\u64cd\u4f5c\u865a\u62df\u673a",permalink:"/blog/2022/02/27/vmware-vmrun-cli"},nextItem:{title:"Dockerfile \u5e38\u7528\u6307\u4ee4\u4ecb\u7ecd",permalink:"/blog/2022/02/26/docker-dockerfile-intro"}},c={authorsImageUrls:[void 0]},u=[{value:"\u539f\u6587",id:"\u539f\u6587",level:2},{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u539f\u6587"},"\u539f\u6587"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u672c\u6587\u4e3aCSDN\u535a\u4e3b\u300c\u51b7\u96e8\u5e7d\u68a6\u300d\u7684\u539f\u521b\u6587\u7ae0\uff0c\u9075\u5faaCC 4.0 BY-SA\u7248\u6743\u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u9644\u4e0a\u539f\u6587\u51fa\u5904\u94fe\u63a5\u53ca\u672c\u58f0\u660e\u3002\n\u539f\u6587\u94fe\u63a5\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/CurtainWei/article/details/115416423"},"https://blog.csdn.net/CurtainWei/article/details/115416423"))),(0,n.kt)("h3",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,n.kt)("p",null,"\u5728Vmware Workstation 16 Pro\u4e2d\u7b80\u6613\u5b89\u88c5Windows 7 SP1\u540e\uff0c\u65e0\u6cd5\u5b89\u88c5VMware Tools\uff0c\u63d0\u793a\u201c\u5b89\u88c5\u7a0b\u5e8f\u65e0\u6cd5\u81ea\u52a8\u5b89\u88c5Virtual Machine Communication Interface(VMCI)\u9a71\u52a8\u7a0b\u5e8f\u3002\u5fc5\u987b\u624b\u52a8\u5b89\u88c5\u6b64\u9a71\u52a8\u7a0b\u5e8f\u3002\u201d"))}m.isMDXComponent=!0}}]);