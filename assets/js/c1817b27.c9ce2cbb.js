"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[86889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return r?o.createElement(f,c(c({ref:t},u),{},{components:r})):o.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},55547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"\u5f00\u653e docker daemon TCP \u7aef\u53e3\u53f7 2375",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["docker"],draft:!1,hide_table_of_contents:!1},c=void 0,i={permalink:"/blog/2022/05/14/docker-daemon-tcp-port",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-05-14-docker-daemon-tcp-port.md",source:"@site/src/blog/2022-05-14-docker-daemon-tcp-port.md",title:"\u5f00\u653e docker daemon TCP \u7aef\u53e3\u53f7 2375",description:"docker \u9ed8\u8ba4\u4f1a\u521b\u5efa\u4e00\u4e2a socket(/var/run/docker.sock) \u4f9b docker daemon \u94fe\u63a5\u4f7f\u7528, \u8fd9\u4e2asocket\u4e00\u822c\u5fc5\u987b\u662froot\u8d26\u53f7\u624d\u80fd\u94fe\u63a5. docker daemon \u540c\u65f6\u652f\u6301\u5f00\u53d1\u4e00\u4e2atcp\u7aef\u53e3\u53f7\u4f9b\u5916\u90e8\u4f7f\u7528, \u5f00\u653e\u6b65\u9aa4\u5982\u4e0b:",date:"2022-05-14T00:00:00.000Z",formattedDate:"May 14, 2022",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:.74,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png"}],frontMatter:{title:"\u5f00\u653e docker daemon TCP \u7aef\u53e3\u53f7 2375",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["docker"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"Dockerfile \u6307\u5b9a entrypoint \u4e4b\u540e\u8fd0\u884c\u62a5 exec format error \u9519\u8bef",permalink:"/blog/2022/05/15/docker-entrypoint-exec-format-error"},nextItem:{title:"\u4f7f\u7528JS\u5bf9\u7528\u6237\u9009\u62e9\u89c6\u9891\u8fdb\u884c\u622a\u56fe",permalink:"/blog/2022/05/11/javascript-video-screenshot"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"docker \u9ed8\u8ba4\u4f1a\u521b\u5efa\u4e00\u4e2a socket(",(0,n.kt)("em",{parentName:"p"},"/var/run/docker.sock"),") \u4f9b docker daemon \u94fe\u63a5\u4f7f\u7528, \u8fd9\u4e2asocket\u4e00\u822c\u5fc5\u987b\u662froot\u8d26\u53f7\u624d\u80fd\u94fe\u63a5. docker daemon \u540c\u65f6\u652f\u6301\u5f00\u53d1\u4e00\u4e2atcp\u7aef\u53e3\u53f7\u4f9b\u5916\u90e8\u4f7f\u7528, \u5f00\u653e\u6b65\u9aa4\u5982\u4e0b:"))}m.isMDXComponent=!0}}]);