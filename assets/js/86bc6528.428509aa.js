"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[30331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97942:(e,t,r)=>{r.d(t,{Og:()=>l,qv:()=>n,zt:()=>i});var a=r(67294);class n extends a.Component{constructor(e){super(e)}render(){const e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?a.createElement("a",{href:e,target:"_blank"},this.props.author):a.createElement("i",null,this.props.author);return a.createElement("section",{style:{marginTop:"1em"}},a.createElement("hr",null),a.createElement("ul",{style:{marginLeft:"-1em"}},a.createElement("li",null,"\u4f5c\u8005: ",r),a.createElement("li",null,"\u6765\u6e90: ",a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",a.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")),a.createElement("hr",null))}}class l extends a.Component{constructor(e){super(e)}render(){const e=`https://gitee.com/alanway/resources/raw/master/${this.props.src}`;return a.createElement("img",{src:e,alt:e,referrerPolicy:"no-referrer"})}}function i(e){const t=`https://gitee.com/alanway/resources/raw/master/${e.href}`;return a.createElement("a",{title:t,href:t,target:"_blank"},"[\u70b9\u6b64\u4e0b\u8f7d] ",e.children)}},88266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(97942);const i={authors:["alan"],tags:["iis","proxy reverse"],description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",draft:!1,hide_table_of_contents:!1},o="\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",s={permalink:"/blog/2021/04/11/iis-reverse-proxy",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-iis-reverse-proxy/index.md",source:"@site/src/blog/2021-04-11-iis-reverse-proxy/index.md",title:"\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"iis",permalink:"/blog/tags/iis"},{label:"proxy reverse",permalink:"/blog/tags/proxy-reverse"}],readingTime:1.34,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of the Blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png",key:"alan"}],frontMatter:{authors:["alan"],tags:["iis","proxy reverse"],description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u5236\u4f5cWindows\u542f\u52a8\u76d8",permalink:"/blog/2021/04/11/windows-bootable-device"},nextItem:{title:"Node.js require \u7f13\u5b58",permalink:"/blog/2021/04/10/node-require-cache"}},m={authorsImageUrls:[void 0]},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"ARR\u8bbe\u7f6e",id:"arr\u8bbe\u7f6e",level:2},{value:"\u914d\u7f6e\u7ad9\u70b9",id:"\u914d\u7f6e\u7ad9\u70b9",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5047\u8bbe\u5c06\u57df\u540d",(0,n.kt)("inlineCode",{parentName:"p"},"www.helloworld.com"),"\u4ee3\u7406\u5230\u672c\u5730\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3"),(0,n.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 IIS"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"li",href:"https://www.iis.net/downloads/microsoft/url-rewrite"},"URL Rewrite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(l.zt,{href:"files/iis-reverse-proxy/IIS_ARR_requestRouter_amd64.msi",mdxType:"ResourceLink"},"Gitee")),(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u4e0b\u8f7d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"English: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_en-US.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_en-US.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"German: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_de-DE.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_de-DE.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Spanish: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_es-ES.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_es-ES.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"French: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_fr-FR.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_fr-FR.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Italian: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_it-IT.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_it-IT.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Japanese: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_ja-JP.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_ja-JP.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Korean: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_ko-KR.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_ko-KR.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Russian: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_ru-RU.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_ru-RU.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Chinese Simplified: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_zh-CN.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_zh-CN.msi"},"x64 installer")),(0,n.kt)("li",{parentName:"ul"},"Chinese Traditional: ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/D/8/1/D81E5DD6-1ABB-46B0-9B4B-21894E18B77F/rewrite_x86_zh-TW.msi"},"x86 installer")," ",(0,n.kt)("a",{parentName:"li",href:"https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_zh-TW.msi"},"x64 installer")))))),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"li",href:"https://www.iis.net/downloads/microsoft/application-request-routing"},"Application Request Routing")," ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(l.zt,{href:"files/iis-reverse-proxy/IIS_URL_Rewriter_rewrite_amd64_en-US.msi",mdxType:"ResourceLink"},"Gitee\u4e0b\u8f7d")),(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u4e0b\u8f7d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.microsoft.com/fwlink/?LinkID=615135"},"x86 installer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.microsoft.com/fwlink/?LinkID=615136"},"x64 installer")))))),(0,n.kt)("li",{parentName:"ul"},"\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"C:\\Windows\\System32\\drivers\\etc\\hosts")," \u6587\u4ef6\u589e\u52a0\u57df\u540d\u89e3\u6790 ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1 www.helloworld.com"))),(0,n.kt)("h2",{id:"arr\u8bbe\u7f6e"},"ARR\u8bbe\u7f6e"),(0,n.kt)("p",null,"\u8fdb\u5165\u5230 ARR \u8bbe\u7f6e:\n",(0,n.kt)("img",{alt:"1",src:r(94304).Z,width:"1632",height:"937"})),(0,n.kt)("p",null,"\u53f3\u4fa7\u70b9\u51fb ",(0,n.kt)("em",{parentName:"p"},"Server Proxy Settings"),":\n",(0,n.kt)("img",{alt:"2",src:r(46240).Z,width:"1632",height:"937"})),(0,n.kt)("p",null,"\u5f00\u542f ",(0,n.kt)("em",{parentName:"p"},"Enable Proxy")," \u5e76\u70b9\u51fb ",(0,n.kt)("em",{parentName:"p"},"Apply")," \u4fdd\u5b58\u8bbe\u7f6e:\n",(0,n.kt)("img",{alt:"3",src:r(51297).Z,width:"1632",height:"937"})),(0,n.kt)("h2",{id:"\u914d\u7f6e\u7ad9\u70b9"},"\u914d\u7f6e\u7ad9\u70b9"),(0,n.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u7ad9\u70b9",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld"),"(\u7ad9\u70b9\u540d\u79f0\u968f\u610f), \u5e76\u7ed1\u5b9a\u57df\u540d",(0,n.kt)("inlineCode",{parentName:"p"},"www.helloworld.com"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4",src:r(5819).Z,width:"731",height:"840"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u7aef\u53e3\u53f7\u8981\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"80"),", ",(0,n.kt)("em",{parentName:"p"},"Host name")," \u586b\u5199\u8981\u7ed1\u5b9a\u7684\u57df\u540d")),(0,n.kt)("p",null,"\u914d\u7f6e",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld"),"\u7ad9\u70b9\u7684URL Rewrite:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tutorial",src:r(10683).Z,width:"1632",height:"937"}),"\n",(0,n.kt)("img",{alt:"tutorial",src:r(80102).Z,width:"1632",height:"937"}),"\n",(0,n.kt)("img",{alt:"tutorial",src:r(11008).Z,width:"1632",height:"937"}),"\n",(0,n.kt)("img",{alt:"tutorial",src:r(65680).Z,width:"710",height:"717"})),(0,n.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"www.helloworld.com")," \u5b9e\u9645\u4e0a\u8bbf\u95ee\u7684\u662fIIS\u7684\u7ad9\u70b9",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld"),", \u7136\u540eIIS\u4f1a\u5c06\u8bf7\u6c42\u8def\u7531\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080"),", \u770b\u5230\u7684\u6548\u679c\u5982\u4e0b: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tutorial",src:r(19067).Z,width:"946",height:"255"})))}d.isMDXComponent=!0},94304:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-1-c6ede66318fcec5b737e9fc11719c0f1.png"},46240:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-2-5e46763e48355cdf1ba395a035fd3940.png"},51297:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-3-75e4abdf0a10a1a52f6da1ae449e3c5e.png"},5819:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-4-c24f532abb6500cc1536c0a5b0de7181.png"},10683:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-5-cf595aa8efdfd6c87a6c2ef919cac795.png"},80102:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-6-8dad2fbc915f46ae21bce17b937feed8.png"},11008:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-7-d44020cedc500a4eb03d0ff025dc8c2a.png"},65680:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-8-b824f59b3b432c0060f8ae654ae392c9.png"},19067:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/IIS-Proxy-Tutorial-9-f51bc7d70925ed7e8221daaedba641a0.png"}}]);