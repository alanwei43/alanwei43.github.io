"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[85293],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(t),m=i,f=g["".concat(p,".").concat(m)]||g[m]||u[m]||a;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24019:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={title:"\u5411\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u5316",keywords:["spring","spring MVC","spring Boot","java"],description:"\u7cbe\u901a Spring 5.0 \u8bfb\u4e66\u7b14\u8bb0 - \u5411\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u5316",image:"https://file.ituring.com.cn/SmallCover/2005c2c7856001fe8cec"},p=void 0,l={unversionedId:"reading/mastering-spring-5/chapter-4",id:"reading/mastering-spring-5/chapter-4",title:"\u5411\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u5316",description:"\u7cbe\u901a Spring 5.0 \u8bfb\u4e66\u7b14\u8bb0 - \u5411\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u5316",source:"@site/src/docs/reading/mastering-spring-5/chapter-4.md",sourceDirName:"reading/mastering-spring-5",slug:"/reading/mastering-spring-5/chapter-4",permalink:"/docs/reading/mastering-spring-5/chapter-4",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/reading/mastering-spring-5/chapter-4.md",tags:[],version:"current",frontMatter:{title:"\u5411\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u5316",keywords:["spring","spring MVC","spring Boot","java"],description:"\u7cbe\u901a Spring 5.0 \u8bfb\u4e66\u7b14\u8bb0 - \u5411\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u5316",image:"https://file.ituring.com.cn/SmallCover/2005c2c7856001fe8cec"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Spring MVC\u6784\u5efaWeb\u5e94\u7528\u7a0b\u5e8f",permalink:"/docs/reading/mastering-spring-5/chapter-3"},next:{title:"\u76ee\u5f55",permalink:"/docs/reading/react-official-docs/"}},s={},u=[{value:"4.1 \u4f7f\u7528Spring\u7684\u5178\u578bWeb\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784",id:"41-\u4f7f\u7528spring\u7684\u5178\u578bweb\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784",level:2}],g={toc:u};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"41-\u4f7f\u7528spring\u7684\u5178\u578bweb\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784"},"4.1 \u4f7f\u7528Spring\u7684\u5178\u578bWeb\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.ituring.com.cn/figures/2020/MasteringSpring5/013.png",alt:"\u4f7f\u7528Spring\u7684\u5178\u578bWeb\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Web\u5c42"),"\uff1a\u8fd9\u4e00\u5c42\u901a\u5e38\u8d1f\u8d23\u63a7\u5236Web\u5e94\u7528\u7a0b\u5e8f\u6d41\uff08\u63a7\u5236\u5668\u6216\u524d\u7aef\u63a7\u5236\u5668\uff09\u5e76\u6e32\u67d3\u89c6\u56fe\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e1a\u52a1\u5c42"),"\uff1a\u6240\u6709\u4e1a\u52a1\u903b\u8f91\u90fd\u662f\u5728\u8fd9\u4e00\u5c42\u7f16\u5199\u7684\u3002\u5927\u591a\u6570\u5e94\u7528\u7a0b\u5e8f\u4ece\u4e1a\u52a1\u5c42\u5f00\u59cb\u8fdb\u884c\u4e8b\u52a1\u7ba1\u7406(\u4e8b\u52a1\u7ba1\u7406\u53ef\u4ee5\u4f7f\u7528Spring AOP\u6216AspectJ\u6765\u5b9e\u73b0)\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6570\u636e\u5c42"),"\uff1a\u8fd9\u4e00\u5c42\u8d1f\u8d23\u68c0\u7d22Java\u5bf9\u8c61\u4e2d\u7684\u6570\u636e\u5e76\u5c06\u5b83\u4eec\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\u8868\u4e2d\u3002\u6b64\u5916\uff0c\u5b83\u8fd8\u8d1f\u8d23\u4e0e\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u96c6\u6210\u5c42"),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u901a\u8fc7\u961f\u5217\u6216\u901a\u8fc7\u8c03\u7528Web\u670d\u52a1\u4e0e\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u3002\u96c6\u6210\u5c42\u8d1f\u8d23\u4e0e\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u5efa\u7acb\u6b64\u7c7b\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a2a\u5207\u5173\u6ce8\u70b9"),"\u5e94\u7528\u4e8e\u6240\u6709\u5c42\uff0c\u6a2a\u8de8\u4e0d\u540c\u5c42\u7684\u5173\u6ce8\u70b9\uff0c\u5982\u65e5\u5fd7\u8bb0\u5f55\u3001\u5b89\u5168\u6027\u3001\u4e8b\u52a1\u7ba1\u7406\u7b49\u3002\u7531\u4e8eSpring IoC\u5bb9\u5668\u8d1f\u8d23\u7ba1\u7406bean\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff08AOP\uff09\u5c06\u8fd9\u4e9b\u5173\u6ce8\u70b9\u7ec7\u5165bean\u3002")))}m.isMDXComponent=!0}}]);