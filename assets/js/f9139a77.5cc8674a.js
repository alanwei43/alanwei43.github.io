"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[42120],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(u,".").concat(d)]||p[d]||b[d]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},40676:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return b}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={title:"RabbitMQ\u5b89\u88c5",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u5b89\u88c5",custom_edit_url:null,keywords:["rabbitmq"],description:"RabbitMQ Ubuntu \u5b89\u88c5"},u=void 0,c={unversionedId:"articles/rabbitmq-guide/install",id:"articles/rabbitmq-guide/install",title:"RabbitMQ\u5b89\u88c5",description:"RabbitMQ Ubuntu \u5b89\u88c5",source:"@site/src/docs/articles/rabbitmq-guide/0-install.md",sourceDirName:"articles/rabbitmq-guide",slug:"/articles/rabbitmq-guide/install",permalink:"/docs/articles/rabbitmq-guide/install",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"RabbitMQ\u5b89\u88c5",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u5b89\u88c5",custom_edit_url:null,keywords:["rabbitmq"],description:"RabbitMQ Ubuntu \u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"HTTPS",permalink:"/docs/articles/okhttp-guide/https"},next:{title:"Hello World",permalink:"/docs/articles/rabbitmq-guide/hello-world"}},s={},b=[{value:"Ubuntu",id:"ubuntu",level:2},{value:"\u5b89\u88c5 Erlang/OTP",id:"\u5b89\u88c5-erlangotp",level:3},{value:"\u5b89\u88c5 RabbitMQ Server",id:"\u5b89\u88c5-rabbitmq-server",level:3}],p={toc:b};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecdUbuntu\u7684\u5b89\u88c5, \u5176\u4ed6\u7684\u5c31\u81ea\u884c\u5b98\u7f51\u67e5\u627e\u5427."),(0,i.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,i.kt)("p",null,"\u5728\u5b89\u88c5\u4e00\u4e0b\u5305\u4e4b\u524d, \u5148\u66f4\u65b0\u4e00\u4e0b\u6e90:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\n")),(0,i.kt)("h3",{id:"\u5b89\u88c5-erlangotp"},"\u5b89\u88c5 Erlang/OTP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install erlang erlang-doc\n")),(0,i.kt)("p",null,"via: ",(0,i.kt)("a",{parentName:"p",href:"http://askubuntu.com/questions/190612/how-to-install-erlang-in-ubuntu-12-04"},"How to install erlang in Ubuntu 12.04?")),(0,i.kt)("h3",{id:"\u5b89\u88c5-rabbitmq-server"},"\u5b89\u88c5 RabbitMQ Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install RabbitMQ-Server\n")),(0,i.kt)("p",null,"\u6211\u7684Ubuntu\u4e0a\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u5c31\u80fd\u5b89\u88c5, \u5982\u679c\u4f60\u7684\u627e\u4e0d\u5230\u8fd9\u4e2a\u5305, \u53ef\u4ee5\u5b89\u88c5",(0,i.kt)("a",{parentName:"p",href:"http://www.rabbitmq.com/install-debian.html"},"\u5b98\u7f51"),"\u63d0\u4f9b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"APT Repository")," \u65b9\u5f0f\u5b89\u88c5."))}d.isMDXComponent=!0}}]);