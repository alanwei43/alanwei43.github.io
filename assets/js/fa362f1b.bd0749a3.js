"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[83746],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:[],description:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",draft:!1,hide_table_of_contents:!1},u=void 0,l={permalink:"/blog/2021/04/11/node-exec-bash-cmd",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-node-exec-bash-cmd.md",source:"@site/src/blog/2021-04-11-node-exec-bash-cmd.md",title:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",description:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[],readingTime:2.62,truncated:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:[],description:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u67e5\u770b\u5f53\u524d\u673a\u5668\u7684\u6240\u6709SSH\u8fde\u63a5",permalink:"/blog/2021/04/11/linux-show-ssh-connection"},nextItem:{title:"Spring Boot Maven \u63d2\u4ef6\u4f7f\u7528",permalink:"/blog/2021/04/11/spring-boot-maven-plugin"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js"},"\u539f\u6587 - Execute a command line binary with Node.js")),(0,o.kt)("p",null,"For even newer version of Node.js (v8.1.4), the events and calls are similar or identical to older versions, but it's encouraged to use the standard newer language features. Examples:"))}m.isMDXComponent=!0}}]);