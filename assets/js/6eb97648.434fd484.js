"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[10970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),b=n,f=m["".concat(u,".").concat(b)]||m[b]||s[b]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["linux","ubuntu"],description:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",draft:!1,hide_table_of_contents:!1},l=void 0,o={permalink:"/blog/2021/04/11/ubuntu-install-root-ca-certificate",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021/04/11-ubuntu-install-root-ca-certificate.md",source:"@site/src/blog/2021/04/11-ubuntu-install-root-ca-certificate.md",title:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",description:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"ubuntu",permalink:"/blog/tags/ubuntu"}],readingTime:1.625,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["linux","ubuntu"],description:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",draft:!1,hide_table_of_contents:!1},prevItem:{title:"Windows \u4e0a\u7684TCP\u4ee3\u7406\u8bbe\u7f6e",permalink:"/blog/2021/04/11/tcp-proxy-in-windows"},nextItem:{title:"Ubuntu\u65b0\u7cfb\u7edf\u5b89\u88c5\u811a\u672c",permalink:"/blog/2021/04/11/ubuntu-starter-scripts"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u539f\u6587\u6765\u81ea: ",(0,n.kt)("a",{parentName:"p",href:"https://www.sonicwall.com/support/knowledge-base/how-to-add-dpi-ssl-ca-certificate-on-ubuntu-os/171225202320465/"},"How To Add DPI-SSL CA Certificate On Ubuntu OS?")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u8bc1\u4e66\u5230\u672c\u5730, \u5982\u679c\u8bc1\u4e66\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},".cer")," \u683c\u5f0f, \u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8f6c\u6210 ",(0,n.kt)("inlineCode",{parentName:"li"},".crt")," \u683c\u5f0f: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ openssl x509 \u2013inform DER -in rootCA.cer \u2013out rootCA.crt\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5728\u76ee\u5f55",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/share/ca-certificates"),"\u4e0b\u521b\u5efa\u4efb\u610f\u540d\u79f0\u5b50\u76ee\u5f55(\u6bd4\u5982\u8fd9\u91cc\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"extra"),"):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir /usr/share/ca-certificates/extra\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u62f7\u8d1d\u6587\u4ef6\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/share/ca-certificates/extra")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/share/ca-certificate/mozilla")),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u547d\u4ee4",(0,n.kt)("inlineCode",{parentName:"li"},"dpkg-reconfigure ca-certificates"),", \u91cd\u65b0\u914d\u7f6e\u8bc1\u4e66:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"li"},"Yes")),(0,n.kt)("li",{parentName:"ul"},"\u6309\u7a7a\u683c\u9009\u4e2d\u521a\u624d\u65b0\u589e\u7684\u8bc1\u4e66: ",(0,n.kt)("inlineCode",{parentName:"li"},"extra/rootCA.crt")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"mozilla/rootCA.crt")),(0,n.kt)("li",{parentName:"ul"},"\u6309 ",(0,n.kt)("em",{parentName:"li"},"Tab")," \u5207\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"Ok"),"\u5e76\u786e\u8ba4"))),(0,n.kt)("li",{parentName:"ol"},"\u6267\u884c\u547d\u4ee4 ",(0,n.kt)("inlineCode",{parentName:"li"},"update-ca-certificates")," \u66f4\u65b0CA\u8bc1\u4e66"),(0,n.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/ca-certificates.conf"),", \u786e\u4fdd\u521a\u624d\u65b0\u589e\u7684\u4e24\u6761\u8bb0\u5f55\u524d\u6ca1\u6709",(0,n.kt)("inlineCode",{parentName:"li"},"!"),"\u7b26\u53f7"),(0,n.kt)("li",{parentName:"ol"},"Firefox / Chrome \u5728Ubuntu\u7cfb\u7edf\u4e0a\u6709\u81ea\u5df1\u7684\u8bc1\u4e66\u6570\u636e\u5e93, \u9700\u8981\u624b\u52a8\u66f4\u65b0\u4e24\u4e2a\u6d4f\u89c8\u5668\u91cc\u7684\u8bc1\u4e66"),(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00Chrome\u6d4f\u89c8\u5668, \u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"li"},"chrome://settings/certificates"),", \u5207\u6362\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"Authorities"),", \u7136\u540e\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Import")," \u5bfc\u5165 ",(0,n.kt)("inlineCode",{parentName:"li"},"rootCA.crt")," \u6587\u4ef6, \u91cd\u542f\u6d4f\u89c8\u5668\u5373\u53ef"),(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00Firefox\u6d4f\u89c8\u5668, \u641c\u7d22 ",(0,n.kt)("inlineCode",{parentName:"li"},"Certificate"),", \u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"View Certificate"),", \u5207\u6362\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"Authorities"),", \u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Import"))),(0,n.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0Chrome\u8bc1\u4e66\u6570\u636e\u5e93:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'certutil \u2013d sql:$HOME/.pki/nssdb \u2013A \u2013t "C,," \u2013n "Description Name" -i /usr/share/ca-certificates/extra/rootCA.crt\n')),(0,n.kt)("p",null,"\u9a8c\u8bc1\u8bc1\u4e66\u88ab\u6dfb\u52a0\u5230Chrome\u8bc1\u4e66\u6570\u636e\u5e93:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ certutil -L -d sql:${HOME}/.pki/nssdb\n")),(0,n.kt)("p",null,"\u7136\u540e\u91cd\u542fChrome\u6d4f\u89c8\u5668, \u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"chrome://settings/certificates")," , \u5207\u6362\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorities")," Tab\u5373\u53ef\u770b\u5230\u65b0\u589e\u7684\u8bc1\u4e66."))}s.isMDXComponent=!0}}]);