"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[2213],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,b=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70802:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",author:"\u7f51\u7edc",author_url:"https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html",tags:["linux","bash"],description:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",draft:!1,hide_table_of_contents:!1},u=void 0,c={permalink:"/blog/2021/04/11/customize-bash-prompt",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-customize-bash-prompt.md",source:"@site/src/blog/2021-04-11-customize-bash-prompt.md",title:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",description:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"bash",permalink:"/blog/tags/bash"}],readingTime:4.1,truncated:!0,authors:[{name:"\u7f51\u7edc",url:"https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html"}],frontMatter:{title:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",author:"\u7f51\u7edc",author_url:"https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html",tags:["linux","bash"],description:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u521b\u5efaWindows\u670d\u52a1",permalink:"/blog/2021/04/11/create-windows-service"},nextItem:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Sentry",permalink:"/blog/2021/04/11/docker-sentry-deploy"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Prompt is control via a special shell variable. You need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"PS1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PS2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PS3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PS4")," variable. If set, the value is executed as a command prior to issuing each primary prompt."))}f.isMDXComponent=!0}}]);