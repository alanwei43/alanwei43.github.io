"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[19342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={tags:["linux","rsync"]},l="rsync \u540c\u6b65\u6587\u4ef6\u6307\u5b9a\u7aef\u53e3\u53f7",i={permalink:"/blog/2023/04/30/rsync-with-custom-port",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2023/04/30-rsync-with-custom-port.md",source:"@site/src/blog/2023/04/30-rsync-with-custom-port.md",title:"rsync \u540c\u6b65\u6587\u4ef6\u6307\u5b9a\u7aef\u53e3\u53f7",description:'rsync \u9ed8\u8ba4\u4f7f\u7528 22 \u7aef\u53e3\u53f7, \u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u53c2\u6570 -e "ssh --port" \u4fee\u6539\u9ed8\u8ba4\u7aef\u53e3\u53f7.',date:"2023-04-30T00:00:00.000Z",formattedDate:"April 30, 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"rsync",permalink:"/blog/tags/rsync"}],readingTime:.605,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["linux","rsync"]},prevItem:{title:"Downloading docker image for transfer to non-internet-connected machine",permalink:"/blog/2023/05/03/docker-offline-install"},nextItem:{title:"\u4f7f\u7528 VMware \u5b89\u88c5 Android",permalink:"/blog/2023/04/30/vmware-install-android"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," \u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("em",{parentName:"p"},"22")," \u7aef\u53e3\u53f7, \u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},'-e "ssh --port"')," \u4fee\u6539\u9ed8\u8ba4\u7aef\u53e3\u53f7."),(0,a.kt)("p",null,"\u6bd4\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709 *.apk \u6587\u4ef6\u540c\u6b65\u5230\u8fdc\u7a0b\u7684 /data/share \u76ee\u5f55\nrsync -rvza -e "ssh -p 9022" ./*.apk username@host:/data/share\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-e")," \u6307\u5b9a\u8fdc\u7aef\u4f7f\u7528\u90a3\u79cdshell"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-r")," \u9012\u5f52\u540c\u6b65\u5b50\u76ee\u5f55\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-a")," \u5b58\u6863(archive)\u6a21\u5f0f, \u7528\u4e8e\u6539\u8fdb\u9012\u5f52\u540c\u6b65\u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-v")," verbose, \u6253\u5370\u54ea\u4e9b\u6587\u4ef6\u88ab\u540c\u6b65\u4e86"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-z")," \u538b\u7f29, \u4f7f\u4f20\u8f93\u66f4\u5feb")))}u.isMDXComponent=!0}}]);