"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[80872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u5bb9\u5668\u5185\u8bbf\u95ee\u7269\u7406\u7f51\u7edc",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["docker"],draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/02/12/docker-connect-host",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/02/12-docker-connect-host.md",source:"@site/src/blog/2022/02/12-docker-connect-host.md",title:"\u5bb9\u5668\u5185\u8bbf\u95ee\u7269\u7406\u7f51\u7edc",description:"\u6982\u8ff0",date:"2022-02-12T00:00:00.000Z",formattedDate:"February 12, 2022",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:2.625,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u5bb9\u5668\u5185\u8bbf\u95ee\u7269\u7406\u7f51\u7edc",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["docker"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u84b2\u516c\u82f1 X1 \u7b80\u4ecb",permalink:"/blog/2022/02/14/oray-box-intro"},nextItem:{title:"\u5b89\u88c5\u6216\u5378\u8f7d Docker",permalink:"/blog/2022/02/12/install-docker"}},c={authorsImageUrls:[void 0]},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u5982\u679c\u5b89\u88c5\u7684\u662f\u6700\u65b0\u7248\u7684 Docker, \u5728\u5bb9\u5668\u5185\u90e8\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," \u5373\u53ef\u8bbf\u95ee\u4e3b\u673a\u7f51\u7edc, \u6bd4\u5982\u5728\u5bb9\u5668\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"curl http://host.docker.internal:8080")," \u5373\u53ef\u8bbf\u95ee\u4e3b\u673a\u7684",(0,a.kt)("em",{parentName:"p"},"8080"),"\u7aef\u53e3. (\u5bf9\u4e8eLinux\u73af\u5883, \u521b\u5efa\u5bb9\u5668\u65f6\u9700\u8981\u589e\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"--add-host=host.docker.internal:host-gateway"),"\u53c2\u6570)"))}s.isMDXComponent=!0}}]);