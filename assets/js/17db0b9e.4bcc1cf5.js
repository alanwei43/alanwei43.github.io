"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[96503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,g=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97942:(e,t,r)=>{r.d(t,{Og:()=>o,qv:()=>n,zt:()=>l});var a=r(67294);class n extends a.Component{constructor(e){super(e)}render(){const e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?a.createElement("a",{href:e,target:"_blank"},this.props.author):a.createElement("i",null,this.props.author);return a.createElement("section",{style:{marginTop:"1em"}},a.createElement("hr",null),a.createElement("ul",{style:{marginLeft:"-1em"}},a.createElement("li",null,"\u4f5c\u8005: ",r),a.createElement("li",null,"\u6765\u6e90: ",a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",a.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")),a.createElement("hr",null))}}class o extends a.Component{constructor(e){super(e)}render(){const e=`https://gitee.com/alanway/resources/raw/master/${this.props.src}`;return a.createElement("img",{src:e,alt:e,referrerPolicy:"no-referrer"})}}function l(e){const t=`https://gitee.com/alanway/resources/raw/master/${e.href}`;return a.createElement("a",{title:t,href:t,target:"_blank"},"[\u70b9\u6b64\u4e0b\u8f7d] ",e.children)}},43793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));r(97942);const o={title:"\u5982\u4f55\u7528\u5f62\u8c61\u7684\u6bd4\u55bb\u63cf\u8ff0\u5927\u6570\u636e\u7684\u6280\u672f\u751f\u6001\uff1fHadoop\u3001Hive\u3001Spark \u4e4b\u95f4\u662f\u4ec0\u4e48\u5173\u7cfb\uff1f",author:"Xiaoyu Ma",author_title:"\u4ea7\u54c1\u7ecf\u7406@PingCAP",author_url:"https://www.zhihu.com/people/xiaoyu-ma",author_image_url:"https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg",tags:["hadoop","\u5927\u6570\u636e","spark","hive","\u8f6c\u6458"],draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/03/31/hadoop-hive-spark-intro",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-03-31-hadoop-hive-spark-intro.md",source:"@site/src/blog/2022-03-31-hadoop-hive-spark-intro.md",title:"\u5982\u4f55\u7528\u5f62\u8c61\u7684\u6bd4\u55bb\u63cf\u8ff0\u5927\u6570\u636e\u7684\u6280\u672f\u751f\u6001\uff1fHadoop\u3001Hive\u3001Spark \u4e4b\u95f4\u662f\u4ec0\u4e48\u5173\u7cfb\uff1f",description:"\u5927\u6570\u636e\u672c\u8eab\u662f\u4e2a\u5f88\u5bbd\u6cdb\u7684\u6982\u5ff5\uff0cHadoop\u751f\u6001\u5708\uff08\u6216\u8005\u6cdb\u751f\u6001\u5708\uff09\u57fa\u672c\u4e0a\u90fd\u662f\u4e3a\u4e86\u5904\u7406\u8d85\u8fc7\u5355\u673a\u5c3a\u5ea6\u7684\u6570\u636e\u5904\u7406\u800c\u8bde\u751f\u7684\u3002\u4f60\u53ef\u4ee5\u628a\u5b83\u6bd4\u4f5c\u4e00\u4e2a\u53a8\u623f\u6240\u4ee5\u9700\u8981\u7684\u5404\u79cd\u5de5\u5177\u3002\u9505\u7897\u74e2\u76c6\uff0c\u5404\u6709\u5404\u7684\u7528\u5904\uff0c\u4e92\u76f8\u4e4b\u95f4\u53c8\u6709\u91cd\u5408\u3002\u4f60\u53ef\u4ee5\u7528\u6c64\u9505\u76f4\u63a5\u5f53\u7897\u5403\u996d\u559d\u6c64\uff0c\u4f60\u53ef\u4ee5\u7528\u5c0f\u5200\u6216\u8005\u5228\u5b50\u53bb\u76ae\u3002\u4f46\u662f\u6bcf\u4e2a\u5de5\u5177\u6709\u81ea\u5df1\u7684\u7279\u6027\uff0c\u867d\u7136\u5947\u602a\u7684\u7ec4\u5408\u4e5f\u80fd\u5de5\u4f5c\uff0c\u4f46\u662f\u672a\u5fc5\u662f\u6700\u4f73\u9009\u62e9\u3002",date:"2022-03-31T00:00:00.000Z",formattedDate:"March 31, 2022",tags:[{label:"hadoop",permalink:"/blog/tags/hadoop"},{label:"\u5927\u6570\u636e",permalink:"/blog/tags/\u5927\u6570\u636e"},{label:"spark",permalink:"/blog/tags/spark"},{label:"hive",permalink:"/blog/tags/hive"},{label:"\u8f6c\u6458",permalink:"/blog/tags/\u8f6c\u6458"}],readingTime:14.76,hasTruncateMarker:!0,authors:[{name:"Xiaoyu Ma",title:"\u4ea7\u54c1\u7ecf\u7406@PingCAP",url:"https://www.zhihu.com/people/xiaoyu-ma",imageURL:"https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg"}],frontMatter:{title:"\u5982\u4f55\u7528\u5f62\u8c61\u7684\u6bd4\u55bb\u63cf\u8ff0\u5927\u6570\u636e\u7684\u6280\u672f\u751f\u6001\uff1fHadoop\u3001Hive\u3001Spark \u4e4b\u95f4\u662f\u4ec0\u4e48\u5173\u7cfb\uff1f",author:"Xiaoyu Ma",author_title:"\u4ea7\u54c1\u7ecf\u7406@PingCAP",author_url:"https://www.zhihu.com/people/xiaoyu-ma",author_image_url:"https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg",tags:["hadoop","\u5927\u6570\u636e","spark","hive","\u8f6c\u6458"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"JavaScript\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",permalink:"/blog/2022/04/4/javascript-scroll-top-smooth"},nextItem:{title:"\u5982\u4f55\u89e3\u51b3Git\u4ed3\u5e93 .git \u6587\u4ef6\u8fc7\u5927\u95ee\u9898",permalink:"/blog/2022/03/31/large-git-repository.md"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5927\u6570\u636e\u672c\u8eab\u662f\u4e2a\u5f88\u5bbd\u6cdb\u7684\u6982\u5ff5\uff0cHadoop\u751f\u6001\u5708\uff08\u6216\u8005\u6cdb\u751f\u6001\u5708\uff09\u57fa\u672c\u4e0a\u90fd\u662f\u4e3a\u4e86\u5904\u7406\u8d85\u8fc7\u5355\u673a\u5c3a\u5ea6\u7684\u6570\u636e\u5904\u7406\u800c\u8bde\u751f\u7684\u3002\u4f60\u53ef\u4ee5\u628a\u5b83\u6bd4\u4f5c\u4e00\u4e2a\u53a8\u623f\u6240\u4ee5\u9700\u8981\u7684\u5404\u79cd\u5de5\u5177\u3002\u9505\u7897\u74e2\u76c6\uff0c\u5404\u6709\u5404\u7684\u7528\u5904\uff0c\u4e92\u76f8\u4e4b\u95f4\u53c8\u6709\u91cd\u5408\u3002\u4f60\u53ef\u4ee5\u7528\u6c64\u9505\u76f4\u63a5\u5f53\u7897\u5403\u996d\u559d\u6c64\uff0c\u4f60\u53ef\u4ee5\u7528\u5c0f\u5200\u6216\u8005\u5228\u5b50\u53bb\u76ae\u3002\u4f46\u662f\u6bcf\u4e2a\u5de5\u5177\u6709\u81ea\u5df1\u7684\u7279\u6027\uff0c\u867d\u7136\u5947\u602a\u7684\u7ec4\u5408\u4e5f\u80fd\u5de5\u4f5c\uff0c\u4f46\u662f\u672a\u5fc5\u662f\u6700\u4f73\u9009\u62e9\u3002"))}u.isMDXComponent=!0}}]);