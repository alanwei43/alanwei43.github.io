"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[66952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97942:(e,t,r)=>{r.d(t,{Og:()=>o,qv:()=>a,zt:()=>i});var n=r(67294);class a extends n.Component{constructor(e){super(e)}render(){const e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?n.createElement("a",{href:e,target:"_blank"},this.props.author):n.createElement("i",null,this.props.author);return n.createElement("section",{style:{marginTop:"1em"}},n.createElement("hr",null),n.createElement("ul",{style:{marginLeft:"-1em"}},n.createElement("li",null,"\u4f5c\u8005: ",r),n.createElement("li",null,"\u6765\u6e90: ",n.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),n.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",n.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",n.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")),n.createElement("hr",null))}}class o extends n.Component{constructor(e){super(e)}render(){const e=`https://gitee.com/alanway/resources/raw/master/${this.props.src}`;return n.createElement("img",{src:e,alt:e,referrerPolicy:"no-referrer"})}}function i(e){const t=`https://gitee.com/alanway/resources/raw/master/${e.href}`;return n.createElement("a",{title:t,href:t,target:"_blank"},"[\u70b9\u6b64\u4e0b\u8f7d] ",e.children)}},11906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));r(97942);const o={title:"\u521b\u5efaWindows\u670d\u52a1",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["windows","serivce"],description:"\u521b\u5efaWindows\u670d\u52a1",draft:!1,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2021/04/11/create-windows-service",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-create-windows-service.md",source:"@site/src/blog/2021-04-11-create-windows-service.md",title:"\u521b\u5efaWindows\u670d\u52a1",description:"\u521b\u5efaWindows\u670d\u52a1",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"windows",permalink:"/blog/tags/windows"},{label:"serivce",permalink:"/blog/tags/serivce"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u521b\u5efaWindows\u670d\u52a1",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["windows","serivce"],description:"\u521b\u5efaWindows\u670d\u52a1",draft:!1,hide_table_of_contents:!1},prevItem:{title:"CentOS\u5b89\u88c5Nginx",permalink:"/blog/2021/04/11/centos-install-nginx"},nextItem:{title:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",permalink:"/blog/2021/04/11/customize-bash-prompt"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"http://www.tacktech.com/display.cfm?ttid=197"},"Create your own user-defined services Windows NT/2000/XP/2003"),", \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://www.iceflatline.com/2015/12/run-a-windows-application-as-a-service-with-srvany/"},"Run a Windows Application as a Service with srvany"))))}p.isMDXComponent=!0}}]);