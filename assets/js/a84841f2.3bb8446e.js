"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[74751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Linux\u542f\u52a8\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u811a\u672c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["cron","linux"],description:"\u5229\u7528linux\u7684crontab\u670d\u52a1\u8bbe\u7f6e\u542f\u52a8\u811a\u672c",draft:!1,hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/2022/02/12/linux-startup-script-crontab",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/02/12-linux-startup-script-crontab.md",source:"@site/src/blog/2022/02/12-linux-startup-script-crontab.md",title:"Linux\u542f\u52a8\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u811a\u672c",description:"\u5229\u7528linux\u7684crontab\u670d\u52a1\u8bbe\u7f6e\u542f\u52a8\u811a\u672c",date:"2022-02-12T00:00:00.000Z",formattedDate:"February 12, 2022",tags:[{label:"cron",permalink:"/blog/tags/cron"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:.74,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"Linux\u542f\u52a8\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u811a\u672c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["cron","linux"],description:"\u5229\u7528linux\u7684crontab\u670d\u52a1\u8bbe\u7f6e\u542f\u52a8\u811a\u672c",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u5b89\u88c5\u6216\u5378\u8f7d Docker",permalink:"/blog/2022/02/12/install-docker"},nextItem:{title:"Ubuntu 20.04 \u5b89\u88c5\u4f7f\u7528 SQLite",permalink:"/blog/2022/02/06/ubuntu-sqlite3-starter"}},c={authorsImageUrls:[void 0]},u=[{value:"cron.service",id:"cronservice",level:2},{value:"\u589e\u52a0\u542f\u52a8\u811a\u672c",id:"\u589e\u52a0\u542f\u52a8\u811a\u672c",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/crontab-reboot"},"Crontab Reboot: How to Execute a Job Automatically at Boot")),(0,a.kt)("h2",{id:"cronservice"},"cron.service"),(0,a.kt)("p",null,"\u5148\u786e\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"cron.service")," \u670d\u52a1\u662f\u5426\u5df2\u7ecf\u542f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status cron.service\n")),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u542f\u7528, \u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl enable cron.service")," \u542f\u52a8\u8be5\u670d\u52a1."),(0,a.kt)("h2",{id:"\u589e\u52a0\u542f\u52a8\u811a\u672c"},"\u589e\u52a0\u542f\u52a8\u811a\u672c"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"crontab -e")," \u5f00\u59cb\u7f16\u8f91\u542f\u52a8\u542f\u52a8\u4efb\u52a1, \u8bed\u6cd5\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@reboot [path to command] [argument1] [argument2] \u2026 [argument n]\n@reboot [part to shell script]\n")),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u542f\u52a8\u65e5\u671f\u4fdd\u5b58\u5230\u7528\u6237\u76ee\u5f55\u4e0b\u7684 date.txt \u6587\u4ef6\u4e2d\n@reboot date >> ~/date.txt\n\n# \u7cfb\u7edf\u7cfb\u7edf\u540e\u6267\u884c\u7279\u5b9ashell\u811a\u672c\u6587\u4ef6\n@reboot /root/backup.sh\n\n# \u7cfb\u7edf\u542f\u52a8\u540e\u5ef6\u8fdf5\u5206\u949f\u6267\u884c\n@reboot sleep 300 && date >> ~/date.txt\n")))}s.isMDXComponent=!0}}]);