"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[52352],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>u});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=m(n),u=l,g=o["".concat(p,".").concat(u)]||o[u]||N[u]||r;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=o;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},32094:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={tags:["linux","shell","ps"]},i="\u66f4\u591a\u7684 bash shell \u547d\u4ee4",d={unversionedId:"linux-command-line-and-shell-scripting-bible/more-bash-shell-command",id:"linux-command-line-and-shell-scripting-bible/more-bash-shell-command",title:"\u66f4\u591a\u7684 bash shell \u547d\u4ee4",description:"\u672c\u7ae0\u5185\u5bb9\u5305\u62ec:",source:"@site/src/docs/reading/linux-command-line-and-shell-scripting-bible/4-more-bash-shell-command.md",sourceDirName:"linux-command-line-and-shell-scripting-bible",slug:"/linux-command-line-and-shell-scripting-bible/more-bash-shell-command",permalink:"/docs/reading/linux-command-line-and-shell-scripting-bible/more-bash-shell-command",draft:!1,tags:[{label:"linux",permalink:"/docs/reading/tags/linux"},{label:"shell",permalink:"/docs/reading/tags/shell"},{label:"ps",permalink:"/docs/reading/tags/ps"}],version:"current",lastUpdatedAt:1677401012,formattedLastUpdatedAt:"Feb 26, 2023",sidebarPosition:4,frontMatter:{tags:["linux","shell","ps"]},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u6587\u4ef6\u7cfb\u7edf",permalink:"/docs/reading/linux-command-line-and-shell-scripting-bible/basic-bash-shell-command"},next:{title:"Vim\u5b9e\u7528\u6280\u5de7",permalink:"/docs/reading/practical-vim/"}},p={},m=[{value:"\u7ba1\u7406\u8fdb\u7a0b",id:"\u7ba1\u7406\u8fdb\u7a0b",level:2},{value:"Unix \u98ce\u683c\u7684\u53c2\u6570",id:"unix-\u98ce\u683c\u7684\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"BSD \u98ce\u683c\u7684\u53c2\u6570",id:"bsd-\u98ce\u683c\u7684\u53c2\u6570",level:3},{value:"GNU \u957f\u53c2\u6570",id:"gnu-\u957f\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"4.1.2 \u5b9e\u65f6\u76d1\u6d4b\u8fdb\u7a0b",id:"412-\u5b9e\u65f6\u76d1\u6d4b\u8fdb\u7a0b",level:3}],k={toc:m};function N(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u66f4\u591a\u7684-bash-shell-\u547d\u4ee4"},"\u66f4\u591a\u7684 bash shell \u547d\u4ee4"),(0,l.kt)("p",null,"\u672c\u7ae0\u5185\u5bb9\u5305\u62ec:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"ps")," \u7684\u53c2\u6570\u548c\u4f7f\u7528\u4ecb\u7ecd")),(0,l.kt)("h2",{id:"\u7ba1\u7406\u8fdb\u7a0b"},"\u7ba1\u7406\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, ",(0,l.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u53ea\u4f1a\u663e\u793a\u8fd0\u884c\u5728\u5f53\u524d\u63a7\u5236\u53f0\u4e0b\u7684\u5c5e\u4e8e\u5f53\u524d\u7528\u6237\u7684\u8fdb\u7a0b."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u66fe\u7ecf\u6709\u4e24\u4e2a\u7248\u672c, \u6bcf\u4e2a\u7248\u672c\u90fd\u6709\u81ea\u5df1\u7684\u547d\u4ee4\u884c\u53c2\u6570\u96c6, \u8fd9\u4e9b\u53c2\u6570\u63a7\u5236\u7740\u8f93\u51fa\u4ec0\u4e48\u4fe1\u606f\u4ee5\u53ca\u5982\u4f55\u663e\u793a. \u6700\u8fd1 Linux \u5f00\u53d1\u4eba\u5458\u5df2\u7ecf\u5c06\u8fd9\u4e24\u79cd",(0,l.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u683c\u5f0f\u5408\u5e76\u5230\u4e86\u5355\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u4e2d."),(0,l.kt)("p",null,"Linux \u7cfb\u7edf\u4e2d\u4f7f\u7528\u7684 GNU ",(0,l.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u652f\u6301 3 \u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u547d\u4ee4\u884c\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unix \u98ce\u683c\u7684\u53c2\u6570\uff0c\u524d\u9762\u52a0\u5355\u7834\u6298\u7ebf"),(0,l.kt)("li",{parentName:"ul"},"BSD \u98ce\u683c\u7684\u53c2\u6570\uff0c\u524d\u9762\u4e0d\u52a0\u7834\u6298\u7ebf"),(0,l.kt)("li",{parentName:"ul"},"GNU \u98ce\u683c\u7684\u957f\u53c2\u6570\uff0c\u524d\u9762\u52a0\u53cc\u7834\u6298\u7ebf\u3002")),(0,l.kt)("h3",{id:"unix-\u98ce\u683c\u7684\u53c2\u6570"},"Unix \u98ce\u683c\u7684\u53c2\u6570"),(0,l.kt)("p",null,"Unix \u98ce\u683c\u7684\u53c2\u6570\u662f\u4ece\u8d1d\u5c14\u5b9e\u9a8c\u5ba4\u5f00\u53d1\u7684 AT&T Unix \u7cfb\u7edf\u4e0a\u539f\u6709\u7684 ps \u547d\u4ee4\u7ee7\u627f\u4e0b\u6765\u7684:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-A")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6240\u6709\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-N")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4e0e\u6307\u5b9a\u53c2\u6570\u4e0d\u7b26\u7684\u6240\u6709\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-a")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u9664\u63a7\u5236\u8fdb\u7a0b(session leader)\u548c\u65e0\u7ec8\u7aef\u8fdb\u7a0b\u5916\u7684\u6240\u6709\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-d")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u9664\u63a7\u5236\u8fdb\u7a0b\u5916\u7684\u6240\u6709\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-e"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u663e\u793a\u6240\u6709\u8fdb\u7a0b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-C cmdlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5305\u542b\u5728",(0,l.kt)("em",{parentName:"td"},"cmdlist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-G grplist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7ec4 ID \u5728",(0,l.kt)("em",{parentName:"td"},"grplist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-U userlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5c5e\u4e3b\u7684\u7528\u6237 ID \u5728",(0,l.kt)("em",{parentName:"td"},"userlist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-g grplist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4f1a\u8bdd\u6216\u7ec4 ID \u5728",(0,l.kt)("em",{parentName:"td"},"grplist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-p pidlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a PID \u5728",(0,l.kt)("em",{parentName:"td"},"pidlist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-s sesslist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4f1a\u8bdd ID \u5728",(0,l.kt)("em",{parentName:"td"},"sesslist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t ttylist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7ec8\u7aef ID \u5728",(0,l.kt)("em",{parentName:"td"},"ttylist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-u userlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6709\u6548\u7528\u6237 ID \u5728",(0,l.kt)("em",{parentName:"td"},"userlist"),"\u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-F"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u663e\u793a\u66f4\u591a\u989d\u5916\u8f93\u51fa(\u76f8\u5bf9",(0,l.kt)("inlineCode",{parentName:"strong"},"-f"),"\u53c2\u6570\u800c\u8a00)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-O format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u9ed8\u8ba4\u7684\u8f93\u51fa\u5217\u4ee5\u53ca",(0,l.kt)("em",{parentName:"td"},"format"),"\u5217\u8868\u6307\u5b9a\u7684\u7279\u5b9a\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-M")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8fdb\u7a0b\u7684\u5b89\u5168\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8fdb\u7a0b\u7684\u989d\u5916\u8c03\u5ea6\u5668\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5b8c\u6574\u683c\u5f0f\u7684\u8f93\u51fa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-j")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4efb\u52a1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-l")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u957f\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-o format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u7531 format \u6307\u5b9a\u7684\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-y")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8981\u663e\u793a\u8fdb\u7a0b\u6807\u8bb0\uff08process flag\uff0c\u8868\u660e\u8fdb\u7a0b\u72b6\u6001\u7684\u6807\u8bb0\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-Z")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5b89\u5168\u6807\u7b7e\uff08security context\uff093 \u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-H")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u5c42\u7ea7\u683c\u5f0f\u6765\u663e\u793a\u8fdb\u7a0b\uff08\u6811\u72b6\uff0c\u7528\u6765\u663e\u793a\u7236\u8fdb\u7a0b\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-n namelist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86 WCHAN \u5217\u663e\u793a\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-w"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u91c7\u7528\u5bbd\u8f93\u51fa\u6a21\u5f0f\uff0c\u4e0d\u9650\u5bbd\u5ea6\u663e\u793a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-L"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u663e\u793a\u8fdb\u7a0b\u4e2d\u7684\u7ebf\u7a0b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-V")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a ps \u547d\u4ee4\u7684\u7248\u672c\u53f7")))),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u663e\u793a\u6240\u6709\u8fdb\u7a0b, \u4e0d\u9650\u5236\u5bbd\u5ea6\nps -efw\n\n# \u4ec5\u663e\u793a\u6307\u5b9a\u5217\u4fe1\u606f\nps -ew -o pid,ppid,time,command\n")),(0,l.kt)("p",null,"\u663e\u793a\u5217\u7684\u5907\u6ce8:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> ps -ef\nUID          PID    PPID  C STIME TTY          TIME CMD\nroot           1       0  0 08:02 ?        00:00:04 /sbin/init splash\nroot           2       0  0 08:02 ?        00:00:00 [kthreadd]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UID"),": \u542f\u52a8\u8fd9\u4e9b\u8fdb\u7a0b\u7684\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PID"),": \u8fdb\u7a0b\u7684\u8fdb\u7a0b ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PPID"),": \u7236\u8fdb\u7a0b\u7684\u8fdb\u7a0b\u53f7\uff08\u5982\u679c\u8be5\u8fdb\u7a0b\u662f\u7531\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u542f\u52a8\u7684\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C"),": \u8fdb\u7a0b\u751f\u547d\u5468\u671f\u4e2d\u7684 CPU \u5229\u7528\u7387"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"STIME"),": \u8fdb\u7a0b\u542f\u52a8\u65f6\u7684\u7cfb\u7edf\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TTY"),": \u8fdb\u7a0b\u542f\u52a8\u65f6\u7684\u7ec8\u7aef\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TIME"),": \u8fd0\u884c\u8fdb\u7a0b\u9700\u8981\u7684\u7d2f\u8ba1 CPU \u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CMD"),": \u542f\u52a8\u7684\u7a0b\u5e8f\u540d\u79f0")),(0,l.kt)("h3",{id:"bsd-\u98ce\u683c\u7684\u53c2\u6570"},"BSD \u98ce\u683c\u7684\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8ddf\u5f53\u524d\u7ec8\u7aef\u5173\u8054\u7684\u6240\u6709\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8ddf\u4efb\u610f\u7ec8\u7aef\u5173\u8054\u7684\u6240\u6709\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6240\u6709\u7684\u8fdb\u7a0b\uff0c\u5305\u62ec\u63a7\u5236\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u8fd0\u884c\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6240\u6709\u7684\u8fdb\u7a0b\uff0c\u751a\u81f3\u5305\u62ec\u672a\u5206\u914d\u4efb\u4f55\u7ec8\u7aef\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"U userlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5f52 userlist \u5217\u8868\u4e2d\u67d0\u7528\u6237 ID \u6240\u6709\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p pidlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a PID \u5728 pidlist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"t ttylist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6240\u5173\u8054\u7684\u7ec8\u7aef\u5728 ttylist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"O format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9664\u4e86\u9ed8\u8ba4\u8f93\u51fa\u7684\u5217\u4e4b\u5916\uff0c\u8fd8\u8f93\u51fa\u7531 format \u6307\u5b9a\u7684\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"X")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6309\u8fc7\u53bb\u7684 Linux i386 \u5bc4\u5b58\u5668\u683c\u5f0f\u663e\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Z")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5b89\u5168\u4fe1\u606f\u6dfb\u52a0\u5230\u8f93\u51fa\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"j")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4efb\u52a1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"l")),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u7528\u957f\u6a21\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"o format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u7531 format \u6307\u5b9a\u7684\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u7528\u4fe1\u53f7\u683c\u5f0f\u663e\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u7528\u57fa\u4e8e\u7528\u6237\u7684\u683c\u5f0f\u663e\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v")),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u7528\u865a\u62df\u5185\u5b58\u683c\u5f0f\u663e\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"N namelist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5728 WCHAN \u5217\u4e2d\u4f7f\u7528\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"O order")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u663e\u793a\u4fe1\u606f\u5217\u7684\u987a\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6570\u503c\u4fe1\u606f\u4ece\u5b50\u8fdb\u7a0b\u52a0\u5230\u7236\u8fdb\u7a0b\u4e0a\uff0c\u6bd4\u5982 CPU \u548c\u5185\u5b58\u7684\u4f7f\u7528\u60c5\u51b5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u771f\u5b9e\u7684\u547d\u4ee4\u540d\u79f0\uff08\u7528\u4ee5\u542f\u52a8\u8fdb\u7a0b\u7684\u7a0b\u5e8f\u540d\u79f0\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"e")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u547d\u4ee4\u4f7f\u7528\u7684\u73af\u5883\u53d8\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u5206\u5c42\u683c\u5f0f\u6765\u663e\u793a\u8fdb\u7a0b\uff0c\u8868\u660e\u54ea\u4e9b\u8fdb\u7a0b\u542f\u52a8\u4e86\u54ea\u4e9b\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"h")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u663e\u793a\u5934\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"k sort")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7528\u4ee5\u5c06\u8f93\u51fa\u6392\u5e8f\u7684\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u548c WCHAN \u4fe1\u606f\u4e00\u8d77\u663e\u793a\u51fa\u6765\uff0c\u7528\u6570\u503c\u6765\u8868\u793a\u7528\u6237 ID \u548c\u7ec4 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"w")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u8f83\u5bbd\u5c4f\u5e55\u663e\u793a\u5bbd\u8f93\u51fa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"H")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u7ebf\u7a0b\u6309\u8fdb\u7a0b\u6765\u663e\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"m")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdb\u7a0b\u540e\u663e\u793a\u7ebf\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"L")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6240\u6709\u683c\u5f0f\u6307\u5b9a\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"V")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a ps \u547d\u4ee4\u7684\u7248\u672c\u53f7")))),(0,l.kt)("h3",{id:"gnu-\u957f\u53c2\u6570"},"GNU \u957f\u53c2\u6570"),(0,l.kt)("p",null,"GNU \u5f00\u53d1\u4eba\u5458\u5728\u8fd9\u4e2a\u65b0\u6539\u8fdb\u8fc7\u7684 ps \u547d\u4ee4\u4e2d\u52a0\u5165\u4e86\u53e6\u5916\u4e00\u4e9b\u53c2\u6570\u3002\u5176\u4e2d\u4e00\u4e9b GNU \u957f\u53c2\u6570\u590d\u5236\u4e86\u73b0\u6709\u7684 Unix \u6216 BSD \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u800c\u53e6\u4e00\u4e9b\u5219\u63d0\u4f9b\u4e86\u65b0\u529f\u80fd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--Group grplist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7ec4 ID \u5728 grplist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--User userlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7528\u6237 ID \u5728 userlist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--group grplist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6709\u6548\u7ec4 ID \u5728 grplist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pid pidlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a PID \u5728 pidlist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ppid pidlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7236 PID \u5728 pidlist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--sid sidlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4f1a\u8bdd ID \u5728 sidlist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tty ttylist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u7ec8\u7aef\u8bbe\u5907\u53f7\u5728 ttylist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--user userlist")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6709\u6548\u7528\u6237 ID \u5728 userlist \u5217\u8868\u4e2d\u7684\u8fdb\u7a0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--format format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u7531 format \u6307\u5b9a\u7684\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--context")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u989d\u5916\u7684\u5b89\u5168\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cols n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5c4f\u5e55\u5bbd\u5ea6\u8bbe\u7f6e\u4e3a n \u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--columns n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5c4f\u5e55\u5bbd\u5ea6\u8bbe\u7f6e\u4e3a n \u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cumulative")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u5df2\u505c\u6b62\u7684\u5b50\u8fdb\u7a0b\u7684\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--forest"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u7528\u5c42\u7ea7\u7ed3\u6784\u663e\u793a\u51fa\u8fdb\u7a0b\u548c\u7236\u8fdb\u7a0b\u4e4b\u95f4\u7684\u5173\u7cfb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--headers")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u6bcf\u9875\u8f93\u51fa\u4e2d\u90fd\u663e\u793a\u5217\u7684\u5934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-headers")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u663e\u793a\u5217\u7684\u5934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lines n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5c4f\u5e55\u9ad8\u5ea6\u8bbe\u4e3a n \u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--rows n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5c4f\u5e55\u9ad8\u5ea6\u8bbe\u4e3a n \u6392")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--sort order"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6307\u5b9a\u5c06\u8f93\u51fa\u6309\u54ea\u5217\u6392\u5e8f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--width n"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u5c06\u5c4f\u5e55\u5bbd\u5ea6\u8bbe\u4e3a n \u5217"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--help")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--info")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8c03\u8bd5\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--version")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a ps \u547d\u4ee4\u7684\u7248\u672c\u53f7")))),(0,l.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6309\u7167\u5c42\u7ea7\u663e\u793a\u8fdb\u7a0b\nps -ef --forest\n\n# \u8bbe\u7f6e\u5c4f\u5e55\u5bbd\u5ea6\nps -ef --width 50\n\n# \u6309\u7167\u65f6\u95f4\u5012\u5e8f, \u7236\u8fdb\u7a0bID\u6b63\u5e8f\u6392\u5217\nps -ef --sort -time,+pid\n")),(0,l.kt)("h3",{id:"412-\u5b9e\u65f6\u76d1\u6d4b\u8fdb\u7a0b"},"4.1.2 \u5b9e\u65f6\u76d1\u6d4b\u8fdb\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"top"),"\u547d\u4ee4\u8f93\u51fa\u7684\u7b2c\u4e00\u90e8\u5206\u663e\u793a\u7684\u662f\u7cfb\u7edf\u7684\u6982\u51b5."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u884c\u663e\u793a\u4e86\u5f53\u524d\u65f6\u95f4\u3001\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u95f4\u3001\u767b\u5f55\u7684\u7528\u6237\u6570\u4ee5\u53ca\u7cfb\u7edf\u7684\u5e73\u5747\u8d1f\u8f7d\u3002\u5e73\u5747\u8d1f\u8f7d\u67093\u4e2a\u503c: \u6700\u8fd11\u5206\u949f\u7684\u3001\u6700\u8fd15\u5206\u949f\u7684\u548c\u6700\u8fd115\u5206\u949f\u7684\u5e73\u5747\u8d1f\u8f7d\u3002\u503c\u8d8a\u5927\u8bf4\u660e\u7cfb\u7edf\u7684\u8d1f\u8f7d\u8d8a\u9ad8\u3002\u7531\u4e8e\u8fdb\u7a0b\u77ed\u671f\u7684\u7a81\u53d1\u6027\u6d3b\u52a8\uff0c\u51fa\u73b0\u6700\u8fd11\u5206\u949f\u7684\u9ad8\u8d1f\u8f7d\u503c\u4e5f\u5f88\u5e38\u89c1\uff0c\u4f46\u5982\u679c\u8fd115\u5206\u949f\u5185\u7684\u5e73\u5747\u8d1f\u8f7d\u90fd\u5f88\u9ad8\uff0c\u5c31\u8bf4\u660e\u7cfb\u7edf\u53ef\u80fd\u6709\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u884c\u663e\u793a\u4e86\u8fdb\u7a0b\u6982\u8981\u4fe1\u606f\u2014\u2014",(0,l.kt)("inlineCode",{parentName:"li"},"top"),"\u547d\u4ee4\u7684\u8f93\u51fa\u4e2d\u5c06\u8fdb\u7a0b\u53eb\u4f5c\u4efb\u52a1(task):\u6709\u591a\u5c11\u8fdb\u7a0b\u5904\u5728 \u8fd0\u884c(running)\u3001\u4f11\u7720(sleeping)\u3001\u505c\u6b62(sopped)\u6216\u662f\u50f5\u5316(zombie)\u72b6\u6001(\u50f5\u5316\u72b6\u6001\u662f\u6307\u8fdb\u7a0b\u5b8c\u6210\u4e86\uff0c\u4f46\u7236\u8fdb\u7a0b\u6ca1\u6709\u54cd\u5e94):"),(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u884c\u663e\u793a\u4e86CPU\u7684\u6982\u8981\u4fe1\u606f\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"top"),"\u6839\u636e\u8fdb\u7a0b\u7684\u5c5e\u4e3b(\u7528\u6237\u8fd8\u662f\u7cfb\u7edf)\u548c\u8fdb\u7a0b\u7684\u72b6\u6001(\u8fd0\u884c\u3001 \u7a7a\u95f2\u8fd8\u662f\u7b49\u5f85)\u5c06CPU\u5229\u7528\u7387\u5206\u6210\u51e0\u7c7b\u8f93\u51fa"),(0,l.kt)("li",{parentName:"ol"},"\u7d27\u8ddf\u5176\u540e\u7684\u4e24\u884c\u8bf4\u660e\u4e86\u7cfb\u7edf\u5185\u5b58\u7684\u72b6\u6001\u3002\u7b2c\u4e00\u884c\u8bf4\u7684\u662f\u7cfb\u7edf\u7684\u7269\u7406\u5185\u5b58:\u603b\u5171\u6709\u591a\u5c11\u5185\u5b58\uff0c \u5f53\u524d\u7528\u4e86\u591a\u5c11\uff0c\u8fd8\u6709\u591a\u5c11\u7a7a\u95f2\u3002\u540e\u4e00\u884c\u8bf4\u7684\u662f\u540c\u6837\u7684\u4fe1\u606f\uff0c\u4e0d\u8fc7\u662f\u9488\u5bf9\u7cfb\u7edf\u4ea4\u6362\u7a7a\u95f4(\u5982\u679c\u5206\u914d \u4e86\u7684\u8bdd)\u7684\u72b6\u6001\u800c\u8a00\u7684\u3002")),(0,l.kt)("p",null,"\u6700\u540e\u4e00\u90e8\u5206\u663e\u793a\u4e86\u5f53\u524d\u8fd0\u884c\u4e2d\u7684\u8fdb\u7a0b\u7684\u8be6\u7ec6\u5217\u8868\uff0c\u6709\u4e9b\u5217\u8ddf",(0,l.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u7684\u8f93\u51fa\u7c7b\u4f3c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PID"),": \u8fdb\u7a0b\u7684ID\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"USER"),": \u8fdb\u7a0b\u5c5e\u4e3b\u7684\u540d\u5b57\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PR"),": \u8fdb\u7a0b\u7684\u4f18\u5148\u7ea7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NI"),": \u8fdb\u7a0b\u7684\u8c26\u8ba9\u5ea6\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VIRT"),": \u8fdb\u7a0b\u5360\u7528\u7684\u865a\u62df\u5185\u5b58\u603b\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RES"),": \u8fdb\u7a0b\u5360\u7528\u7684\u7269\u7406\u5185\u5b58\u603b\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHR"),": \u8fdb\u7a0b\u548c\u5176\u4ed6\u8fdb\u7a0b\u5171\u4eab\u7684\u5185\u5b58\u603b\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"S"),": \u8fdb\u7a0b\u7684\u72b6\u6001(",(0,l.kt)("inlineCode",{parentName:"li"},"D"),"\u4ee3\u8868\u53ef\u4e2d\u65ad\u7684\u4f11\u7720\u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"R"),"\u4ee3\u8868\u5728\u8fd0\u884c\u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"S"),"\u4ee3\u8868\u4f11\u7720\u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"T"),"\u4ee3\u8868\u8ddf\u8e2a\u72b6\u6001\u6216\u505c\u6b62\u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Z"),"\u4ee3\u8868\u50f5\u5316\u72b6\u6001)\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%CPU"),": \u8fdb\u7a0b\u4f7f\u7528\u7684CPU\u65f6\u95f4\u6bd4\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%MEM"),": \u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\u5360\u53ef\u7528\u5185\u5b58\u7684\u6bd4\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TIME+"),": \u81ea\u8fdb\u7a0b\u542f\u52a8\u5230\u76ee\u524d\u4e3a\u6b62\u7684CPU\u65f6\u95f4\u603b\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COMMAND"),": \u8fdb\u7a0b\u6240\u5bf9\u5e94\u7684\u547d\u4ee4\u884c\u540d\u79f0\uff0c\u4e5f\u5c31\u662f\u542f\u52a8\u7684\u7a0b\u5e8f\u540d")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"top",src:n(21732).Z,width:"1172",height:"526"})))}N.isMDXComponent=!0},21732:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/command-top-screenshot-4a20dc2c328dcd8326ca582e4ad7525a.png"}}]);