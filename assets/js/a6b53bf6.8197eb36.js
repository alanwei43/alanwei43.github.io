"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[40049],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,v=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return a?n.createElement(v,l(l({ref:t},u),{},{components:a})):n.createElement(v,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},49116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={title:"VMware \u547d\u4ee4\u884c\u64cd\u4f5c\u865a\u62df\u673a",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vmware","vmrun"],draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/02/27/vmware-vmrun-cli",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-02-27-vmware-vmrun-cli.md",source:"@site/src/blog/2022-02-27-vmware-vmrun-cli.md",title:"VMware \u547d\u4ee4\u884c\u64cd\u4f5c\u865a\u62df\u673a",description:"\u4f7f\u7528\u547d\u4ee4\u884c vmrun \u64cd\u4f5c\u865a\u62df\u673a",date:"2022-02-27T00:00:00.000Z",formattedDate:"February 27, 2022",tags:[{label:"vmware",permalink:"/blog/tags/vmware"},{label:"vmrun",permalink:"/blog/tags/vmrun"}],readingTime:1.455,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"VMware \u547d\u4ee4\u884c\u64cd\u4f5c\u865a\u62df\u673a",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vmware","vmrun"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"Spring \u54cd\u5e94\u56fe\u7247\u7b49\u5a92\u4f53\u6570\u636e",permalink:"/blog/2022/03/01/spring-response-image"},nextItem:{title:"VMware\u7684Windows\u865a\u62df\u673a\u4e2d\u56e0\u9a71\u52a8\u7b7e\u540d\u95ee\u9898\u65e0\u6cd5\u5b89\u88c5 VMware Tools",permalink:"/blog/2022/02/27/windows-vmware-tools-drive-fail"}},s={authorsImageUrls:[void 0]},m=[{value:"\u547d\u4ee4\u53c2\u6570",id:"\u547d\u4ee4\u53c2\u6570",level:2},{value:"\u57fa\u7840\u547d\u4ee4",id:"\u57fa\u7840\u547d\u4ee4",level:2},{value:"\u5217\u51fa\u8fd0\u884c\u7684\u865a\u62df\u673a",id:"\u5217\u51fa\u8fd0\u884c\u7684\u865a\u62df\u673a",level:3},{value:"\u542f\u52a8\u865a\u62df\u673a",id:"\u542f\u52a8\u865a\u62df\u673a",level:3},{value:"\u5173\u95ed\u865a\u62df\u673a",id:"\u5173\u95ed\u865a\u62df\u673a",level:3},{value:"vmware tools",id:"vmware-tools",level:3},{value:"\u5220\u9664\u865a\u62df\u673a",id:"\u5220\u9664\u865a\u62df\u673a",level:3},{value:"\u5f00\u542f\u6587\u4ef6\u5939\u5171\u4eab",id:"\u5f00\u542f\u6587\u4ef6\u5939\u5171\u4eab",level:3}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"vmrun")," \u64cd\u4f5c\u865a\u62df\u673a"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Windows\u73af\u5883, ",(0,r.kt)("inlineCode",{parentName:"p"},"vmrun")," \u547d\u4ee4\u4e00\u822c\u5728 ",(0,r.kt)("em",{parentName:"p"},"C:\\Program Files\\VMware\\VMware Workstation\\vmrun")," \u6216\u8005 ",(0,r.kt)("em",{parentName:"p"},"C:\\Program Files\\VMware\\VMware Workstation\\vmrun")),(0,r.kt)("p",{parentName:"admonition"},"macOS \u6216\u8005 Linux \u4e00\u822c\u76f4\u63a5\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"vmrun")," \u5373\u53ef.")),(0,r.kt)("h2",{id:"\u547d\u4ee4\u53c2\u6570"},"\u547d\u4ee4\u53c2\u6570"),(0,r.kt)("p",null,"\u547d\u4ee4\u683c\u5f0f: ",(0,r.kt)("inlineCode",{parentName:"p"},"vmrun [AUTHENTICATION-FLAGS] COMMAND [PARAMETERS]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AUTHENTICATION-FLAGS\n--------------------\nThese must appear before the command and any command parameters.\n\n   -T <hostType> (ws|fusion||player)\n   -vp <password for encrypted virtual machine>\n   -gu <userName in guest OS>\n   -gp <password in guest OS>\n\n\n\nPOWER COMMANDS           PARAMETERS           DESCRIPTION\n--------------           ----------           -----------\nstart                    Path to vmx file     Start a VM or Team\n                         [gui|nogui]\n\nstop                     Path to vmx file     Stop a VM or Team\n                         [hard|soft]\n\nreset                    Path to vmx file     Reset a VM or Team\n                         [hard|soft]\n\nsuspend                  Path to vmx file     Suspend a VM or Team\n                         [hard|soft]\n\npause                    Path to vmx file     Pause a VM\n\nunpause                  Path to vmx file     Unpause a VM\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-T <hostType>")," \u7528\u4e8e\u6307\u5b9a\u7269\u7406\u673a\u4f7f\u7528vmware\u8f6f\u4ef6, ",(0,r.kt)("em",{parentName:"li"},"ws")," \u6307\u7684\u662f VMware Workstation, Windows\u548cLinux\u7269\u7406\u673a\u5b89\u88c5\u7684\u662f\u8fd9\u4e2a. VMware Fusion \u662fmacOS\u4f7f\u7528\u7684, player \u4ec5\u6307 VMWare Player(Windows, Linux\u548cmacOS\u90fd\u53ef\u4ee5\u5b89\u88c5).")),(0,r.kt)("h2",{id:"\u57fa\u7840\u547d\u4ee4"},"\u57fa\u7840\u547d\u4ee4"),(0,r.kt)("h3",{id:"\u5217\u51fa\u8fd0\u884c\u7684\u865a\u62df\u673a"},"\u5217\u51fa\u8fd0\u884c\u7684\u865a\u62df\u673a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vmrun list\n\nTotal running VMs: 1\n/data/vmware/windows7/windows7x64.vmx\n")),(0,r.kt)("h3",{id:"\u542f\u52a8\u865a\u62df\u673a"},"\u542f\u52a8\u865a\u62df\u673a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vmrun -T ws start "/data/vmware/windows7/windows7x64.vmx"\n')),(0,r.kt)("h3",{id:"\u5173\u95ed\u865a\u62df\u673a"},"\u5173\u95ed\u865a\u62df\u673a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vmrun -T ws stop "/data/vmware/windows7/windows7x64.vmx"\n')),(0,r.kt)("h3",{id:"vmware-tools"},"vmware tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vmrun installtools "/data/vmware/windows7/windows7x64.vmx"\nvmrun checkToolsState "/data/vmware/windows7/windows7x64.vmx"\n')),(0,r.kt)("h3",{id:"\u5220\u9664\u865a\u62df\u673a"},"\u5220\u9664\u865a\u62df\u673a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vmrun deleteVM "/data/vmware/windows7/windows7x64.vmx"\n\n')),(0,r.kt)("h3",{id:"\u5f00\u542f\u6587\u4ef6\u5939\u5171\u4eab"},"\u5f00\u542f\u6587\u4ef6\u5939\u5171\u4eab"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vmrun -T ws enableSharedFolders "/data/vmware/windows7/windows7x64.vmx"\n')))}p.isMDXComponent=!0}}]);