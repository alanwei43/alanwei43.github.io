"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[32046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97942:(e,t,r)=>{r.d(t,{Og:()=>o,qv:()=>a,zt:()=>l});var n=r(67294);class a extends n.Component{constructor(e){super(e)}render(){const e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?n.createElement("a",{href:e,target:"_blank"},this.props.author):n.createElement("i",null,this.props.author);return n.createElement("section",{style:{marginTop:"1em"}},n.createElement("hr",null),n.createElement("ul",{style:{marginLeft:"-1em"}},n.createElement("li",null,"\u4f5c\u8005: ",r),n.createElement("li",null,"\u6765\u6e90: ",n.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),n.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",n.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",n.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")),n.createElement("hr",null))}}class o extends n.Component{constructor(e){super(e)}render(){const e=`https://gitee.com/alanway/resources/raw/master/${this.props.src}`;return n.createElement("img",{src:e,alt:e,referrerPolicy:"no-referrer"})}}function l(e){const t=`https://gitee.com/alanway/resources/raw/master/${e.href}`;return n.createElement("a",{title:t,href:t,target:"_blank"},"[\u70b9\u6b64\u4e0b\u8f7d] ",e.children)}},47944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(97942);const o={title:"\u67e5\u770bLinux\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["linux"],description:"\u4f7f\u7528\u547d\u4ee4\u884c\u67e5\u770b\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4",draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/04/25/linux-reboot-time",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-04-25-linux-reboot-time.md",source:"@site/src/blog/2022-04-25-linux-reboot-time.md",title:"\u67e5\u770bLinux\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4",description:"\u4f7f\u7528\u547d\u4ee4\u884c\u67e5\u770b\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4",date:"2022-04-25T00:00:00.000Z",formattedDate:"April 25, 2022",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:2.505,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png"}],frontMatter:{title:"\u67e5\u770bLinux\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["linux"],description:"\u4f7f\u7528\u547d\u4ee4\u884c\u67e5\u770b\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u57cb\u70b9\u4f7f\u7528Gif\u56fe\u7247\u7684\u4f18\u70b9",permalink:"/blog/2022/04/27/front-end-pv-gif"},nextItem:{title:"undici \u7b80\u4ecb - Node.js",permalink:"/blog/2022/04/22/nodejs-undici-intro"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/kerrycode/p/3759395.html"},"via Linux\u67e5\u770b\u7cfb\u7edf\u5f00\u673a\u65f6\u95f4")))}p.isMDXComponent=!0}}]);