(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(546)),c={title:"Linux\u542f\u52a8\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u811a\u672c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["cron","linux"],description:"\u5229\u7528linux\u7684crontab\u670d\u52a1\u8bbe\u7f6e\u542f\u52a8\u811a\u672c",draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2022/02/12/linux-startup-script-crontab",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-02-12-linux-startup-script-crontab.md",source:"@site/src/blog/2022-02-12-linux-startup-script-crontab.md",description:"\u5229\u7528linux\u7684crontab\u670d\u52a1\u8bbe\u7f6e\u542f\u52a8\u811a\u672c",date:"2022-02-12T00:00:00.000Z",tags:[{label:"cron",permalink:"/blog/tags/cron"},{label:"linux",permalink:"/blog/tags/linux"}],title:"Linux\u542f\u52a8\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u811a\u672c",readingTime:.375,truncated:!0,prevItem:{title:"\u5b89\u88c5\u6216\u5378\u8f7d Docker",permalink:"/blog/2022/02/12/install-docker"},nextItem:{title:"Ubuntu 20.04 \u5b89\u88c5\u4f7f\u7528 SQLite",permalink:"/blog/2022/02/06/ubuntu-sqlite3-starter"}},l=[{value:"cron.service",id:"cronservice",children:[]},{value:"\u589e\u52a0\u542f\u52a8\u811a\u672c",id:"\u589e\u52a0\u542f\u52a8\u811a\u672c",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u53c2\u8003 ",Object(o.b)("a",{parentName:"p",href:"https://phoenixnap.com/kb/crontab-reboot"},"Crontab Reboot: How to Execute a Job Automatically at Boot")),Object(o.b)("h2",{id:"cronservice"},"cron.service"),Object(o.b)("p",null,"\u5148\u786e\u8ba4 ",Object(o.b)("inlineCode",{parentName:"p"},"cron.service")," \u670d\u52a1\u662f\u5426\u5df2\u7ecf\u542f\u7528:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"systemctl status cron.service\n")),Object(o.b)("p",null,"\u5982\u679c\u6ca1\u6709\u542f\u7528, \u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"systemctl enable cron.service")," \u542f\u52a8\u8be5\u670d\u52a1."),Object(o.b)("h2",{id:"\u589e\u52a0\u542f\u52a8\u811a\u672c"},"\u589e\u52a0\u542f\u52a8\u811a\u672c"),Object(o.b)("p",null,"\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"crontab -e")," \u5f00\u59cb\u7f16\u8f91\u542f\u52a8\u542f\u52a8\u4efb\u52a1, \u8bed\u6cd5\u5982\u4e0b:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"@reboot [path to command] [argument1] [argument2] \u2026 [argument n]\n@reboot [part to shell script]\n")),Object(o.b)("p",null,"\u793a\u4f8b:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# \u542f\u52a8\u65e5\u671f\u4fdd\u5b58\u5230\u7528\u6237\u76ee\u5f55\u4e0b\u7684 date.txt \u6587\u4ef6\u4e2d\n@reboot date >> ~/date.txt\n\n# \u7cfb\u7edf\u7cfb\u7edf\u540e\u6267\u884c\u7279\u5b9ashell\u811a\u672c\u6587\u4ef6\n@reboot /root/backup.sh\n\n# \u7cfb\u7edf\u542f\u52a8\u540e\u5ef6\u8fdf5\u5206\u949f\u6267\u884c\n@reboot sleep 300 && date >> ~/date.txt\n")))}b.isMDXComponent=!0},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);